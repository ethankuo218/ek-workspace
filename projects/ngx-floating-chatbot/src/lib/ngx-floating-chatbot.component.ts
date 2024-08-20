import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleUp, fas } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { far } from '@fortawesome/free-regular-svg-icons';
import { NGX_FLOATING_CHATBOT_CONFIG, NgxFloatingChatbotService } from './service/ngx-floating-chatbot.service';
import { ChatbotHistoryComponent } from './components/chatbot-history/chatbot-history.component';
import { ChatbotChatComponent } from './components/chatbot-chat/chatbot-chat.component';
import { OllamaConfig } from '../models/chatbot.model';

@Component({
  selector: 'ngx-floating-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ChatbotHistoryComponent,
    ChatbotChatComponent
  ],
  templateUrl: './ngx-floating-chatbot.component.html',
  styleUrls: ['./ngx-floating-chatbot.component.scss'],
  providers: [NgxFloatingChatbotService, {
    provide: NGX_FLOATING_CHATBOT_CONFIG,
    useValue: {
      apiUrl: '/mock-sse',
      model: 'llama3',
    } as OllamaConfig
  }]
})
export class NgxFloatingChatbotComponent {
  @Input() config?: Partial<OllamaConfig>;
  @Input() openIcon: IconProp = faAngleUp;
  @Input() closeIcon: IconProp = faAngleDown;

  private library = inject(FaIconLibrary);
  private destroyed$ = new Subject<void>();

  public showChatWindow: boolean = false;
  public isFullscreen: boolean = false;

  public get currentIcon(): IconProp {
    return this.showChatWindow ? this.closeIcon : this.openIcon;
  }

  constructor() {
    if (this.config) {
      const currentConfig = inject(NGX_FLOATING_CHATBOT_CONFIG);
      Object.assign(currentConfig, this.config);
    }

    this.library.addIconPacks(fas, far);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public toggleChatWindow() {
    this.showChatWindow = !this.showChatWindow;
  }

  public toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
