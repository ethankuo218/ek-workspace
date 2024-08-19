import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleUp, fas } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { far } from '@fortawesome/free-regular-svg-icons';
import { ChatbotWindowComponent } from './chatbot-window/chatbot-window.component';
import { NgxFloatingChatbotService } from './service/ngx-floating-chatbot.service';

@Component({
  selector: 'ngx-floating-chatbot',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ChatbotWindowComponent],
  template: `
  <button class="chatbot-toggler" (click)="toggleChatWindow()">
  <span class="message-icon" [ngSwitch]="showChatWindow">
      <ng-container *ngSwitchCase="true">
        <fa-icon [icon]="['fas', 'angle-down']" transform="grow-6"></fa-icon>
      </ng-container>
      <ng-container *ngSwitchCase="false">
      <fa-icon [icon]="['fas', 'comment']" transform="grow-6"></fa-icon>
      </ng-container>
    </span>
</button>

<chatbot-window *ngIf="true"></chatbot-window>
  `,
  styleUrls: ['./ngx-floating-chatbot.component.scss'],
  providers: [NgxFloatingChatbotService]
})
export class NgxFloatingChatbotComponent {
  @Input() openIcon: IconProp = faAngleUp;
  @Input() closeIcon: IconProp = faAngleDown;

  private library = inject(FaIconLibrary);
  private destroyed$ = new Subject<void>();

  public showChatWindow: boolean = false;

  public get currentIcon(): IconProp {
    return this.showChatWindow ? this.closeIcon : this.openIcon;
  }

  constructor() {
    this.library.addIconPacks(fas, far);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public toggleChatWindow() {
    this.showChatWindow = !this.showChatWindow;
  }
}
