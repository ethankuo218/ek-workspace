import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryListItemComponent } from './history-list-item.component';

describe('HistoryListItemComponent', () => {
  let component: HistoryListItemComponent;
  let fixture: ComponentFixture<HistoryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
