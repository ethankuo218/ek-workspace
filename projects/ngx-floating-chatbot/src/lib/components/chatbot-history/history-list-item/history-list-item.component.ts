
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'history-list-item',
  standalone: true,
  imports: [
    FormsModule,
    FontAwesomeModule
],
  templateUrl: './history-list-item.component.html',
  styleUrl: './history-list-item.component.scss'
})
export class HistoryListItemComponent {
  @ViewChild('historyToolBtn') historyToolBtn!: ElementRef;

  // Context menu related
  public currentSelectedToolMenuIndex: number | null = null;
  public currentEditChatNameIndex: number | null = null;
  public chatNameInput: string = '';

  public openToolMenu(index: number): void {
    this.currentSelectedToolMenuIndex = index;
    this.historyToolBtn.nativeElement.focus();
  }

  public closeToolMenu(): void {
    this.currentSelectedToolMenuIndex = null;
  }

  public editChatName(index: number): void {
    this.currentEditChatNameIndex = index;
  }

  public editChatNameSubmit(): void {
    this.currentEditChatNameIndex = null;
  }

  public deleteChat(index: number): void {
    // dialog
  }
}
