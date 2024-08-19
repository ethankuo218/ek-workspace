import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HistoryListItemComponent } from './history-list-item/history-list-item.component';

@Component({
  selector: 'chatbot-history',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    HistoryListItemComponent
  ],
  templateUrl: './chatbot-history.component.html',
  styleUrl: './chatbot-history.component.scss'
})
export class ChatbotHistoryComponent {
  public getChatList(): void { }

  public createNewChat(): void { }

  public editChatName(): void { }

  public deleteChat(index: number): void { }
}
