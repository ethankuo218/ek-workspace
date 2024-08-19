import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFloatingChatbotComponent } from './ngx-floating-chatbot.component';

describe('NgxFloatingChatbotComponent', () => {
  let component: NgxFloatingChatbotComponent;
  let fixture: ComponentFixture<NgxFloatingChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFloatingChatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxFloatingChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
