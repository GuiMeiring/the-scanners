import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteAddressComponent } from './modal-delete-address.component';

describe('ModalDeleteAddressComponent', () => {
  let component: ModalDeleteAddressComponent;
  let fixture: ComponentFixture<ModalDeleteAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
