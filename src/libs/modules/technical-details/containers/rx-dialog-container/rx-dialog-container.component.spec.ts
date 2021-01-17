import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxDialogContainerComponent } from './rx-dialog-container.component';

describe('RxDialogContainerComponent', () => {
  let component: RxDialogContainerComponent;
  let fixture: ComponentFixture<RxDialogContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxDialogContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
