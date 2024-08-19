import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatMessage } from '../../../../models/chatbot.model';

@Component({
  selector: 'chat-list-item',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './chat-list-item.component.html',
  styleUrl: './chat-list-item.component.scss'
})
export class ChatListItemComponent {
  @Input() data!: ChatMessage;
  @Output() onCommentSubmit = new EventEmitter<string>();

  public showCommentArea: boolean = false;
  public commentInput: string = '';

  public toggleCommentArea(): void {
    this.showCommentArea = !this.showCommentArea;
  }

  public submit(): void {
    this.onCommentSubmit.emit(this.commentInput);
    this.showCommentArea = false;
    this.commentInput = '';
  }

  public regenerate(): void { }
}
