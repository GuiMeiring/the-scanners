import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddAddressComponent } from './modal-add-address.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('ModalAddAddressComponent', () => {
  let component: ModalAddAddressComponent;
  let fixture: ComponentFixture<ModalAddAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddAddressComponent ],
      
    })
    .compileComponents();
    fixture = TestBed.createComponent(ModalAddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
