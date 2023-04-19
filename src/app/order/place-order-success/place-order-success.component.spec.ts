import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderSuccessComponent } from './place-order-success.component';

describe('PlaceOrderSuccessComponent', () => {
  let component: PlaceOrderSuccessComponent;
  let fixture: ComponentFixture<PlaceOrderSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceOrderSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
