import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddAddressComponent } from './modal-add-address.component';

describe('ModalAddAddressComponent', () => {
  let component: ModalAddAddressComponent;
  let fixture: ComponentFixture<ModalAddAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
