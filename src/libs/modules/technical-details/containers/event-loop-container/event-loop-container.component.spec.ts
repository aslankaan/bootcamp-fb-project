import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLoopContainerComponent } from './event-loop-container.component';

describe('EventLoopContainerComponent', () => {
  let component: EventLoopContainerComponent;
  let fixture: ComponentFixture<EventLoopContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLoopContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLoopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
