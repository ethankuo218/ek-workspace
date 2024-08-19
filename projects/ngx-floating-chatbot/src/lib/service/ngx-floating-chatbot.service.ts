import { ElementRef, inject, Injectable } from '@angular/core';
import { SseClient } from 'ngx-sse-client';
import { BehaviorSubject, filter, ReplaySubject } from 'rxjs';
import { ChatMessage } from '../../models/chatbot.model';

@Injectable()
export class NgxFloatingChatbotService {
  private sseClient = inject(SseClient);

  private chatIndex: number = 0;
  private chatContent!: ElementRef;

  public chatList$ = new BehaviorSubject<ChatMessage[]>([]);

  public getChat(): void { }

  public getChatHistory(): void { }

  public generateResponse(input: string, chatElementRef: ElementRef): void {
    this.chatContent = chatElementRef;
    let currentResponse = '';

    this.chatList$.next([
      ...this.chatList$.value,
      {
        question: input,
        answer: new ReplaySubject<string>(1),
        done: new ReplaySubject<boolean>(1)
      }
    ]);

    this.scrollToBottom();

    this.sseClient
      .stream(
        '/mock-see',
        {
          keepAlive: false,
          responseType: 'event'
        },
        {
          body: {
            model: 'llama3',
            prompt: input
          }
        },
        'POST'
      )
      .pipe(filter((res) => (res as MessageEvent).data !== undefined))
      .subscribe({
        next: (res) => {
          const { response, done } = JSON.parse((res as MessageEvent).data);

          currentResponse += response;

          this.chatList$.value[this.chatIndex].answer.next(currentResponse);

          this.scrollToBottom();

          if (done) {
            this.chatList$.value[this.chatIndex].done.next(true);
            this.chatList$.value[this.chatIndex].answer.complete();
            this.chatList$.value[this.chatIndex].done.complete();
            this.chatIndex++;
          }
        },
        error: () => { }
      });
  }

  public reset(): void {
    this.chatList$.next([]);
    this.chatIndex = 0;
  }

  public editChatName(): void { }

  public deleteChat(): void { }

  public regenerate(): void { }

  public comment(): void { }

  public startNewChat(): void { }

  private scrollToBottom(delay: number = 100): void {
    setTimeout(() => {
      this.chatContent.nativeElement.scrollTo({
        top: this.chatContent.nativeElement.scrollHeight,
        behavior: 'smooth'
      });
    }, delay);
  }
}

// Observable which mark the chat is from the same response or not

// ask question -> update chat & mark the end
// get response -> stream -> update chat partially & mark the end

// View
// detect: from user update chat and show directly
// detect: from bot update chat and update continuously

//API:
// getChat GET /:chatId Message[]
// getChatHistory GET Chat[], { id: number, name: string }
// editChatName POST /:chatId {id: number, name: string}
// deleteChat DELETE /:chatId
// regenerate POST
// comment POST /:messageId
// startNewChat POST
// generateResponse POST
