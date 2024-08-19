import { TestBed } from '@angular/core/testing';

import { NgxFloatingChatbotService } from './ngx-floating-chatbot.service';

describe('NgxFloatingChatbotService', () => {
  let service: NgxFloatingChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFloatingChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
