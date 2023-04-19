import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOrderStatusComponent } from './return-order-status.component';

describe('ReturnOrderStatusComponent', () => {
  let component: ReturnOrderStatusComponent;
  let fixture: ComponentFixture<ReturnOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnOrderStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
