import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxFloatingChatbotComponent } from '../../../ngx-floating-chatbot/src/public-api';
import { OllamaConfig } from '../../../ngx-floating-chatbot/src/models/chatbot.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgxFloatingChatbotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'demo';
  public chatbotConfig: OllamaConfig = {
    apiUrl: '/mock-sse',
    model: 'llama3',
  };
}
