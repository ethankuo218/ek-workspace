import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatbotHistoryComponent } from '../components/chatbot-history/chatbot-history.component';
import { ChatbotChatComponent } from '../components/chatbot-chat/chatbot-chat.component';

@Component({
  selector: 'chatbot-window',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ChatbotHistoryComponent,
    ChatbotChatComponent
  ],
  templateUrl: './chatbot-window.component.html',
  styleUrl: './chatbot-window.component.scss'
})
export class ChatbotWindowComponent {
  @HostBinding('class.full-screen')
  isFullscreen: boolean = false;

  public toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
