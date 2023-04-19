import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressAccountInformationComponent } from './address-account-information.component';

describe('AddressAccountInformationComponent', () => {
  let component: AddressAccountInformationComponent;
  let fixture: ComponentFixture<AddressAccountInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressAccountInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressAccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
