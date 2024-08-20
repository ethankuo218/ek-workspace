import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, inject, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxFloatingChatbotService } from '../../service/ngx-floating-chatbot.service';
import { ChatListItemComponent } from './chat-list-item/chat-list-item.component';

@Component({
  selector: 'chatbot-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ChatListItemComponent
  ],
  templateUrl: './chatbot-chat.component.html',
  styleUrl: './chatbot-chat.component.scss'
})
export class ChatbotChatComponent {
  @ViewChild('chatContent', { static: false })
  chatContent!: ElementRef;
  @Input()
  @HostBinding('class.full-screen')
  isFullscreen: boolean = false;

  private service = inject(NgxFloatingChatbotService);

  public chatList$ = this.service.chatList$;
  public input: string = '';

  public send(): void {
    if (this.input === '') {
      return;
    }

    this.service.generateResponse(this.input, this.chatContent);
    this.input = '';
  }
}
