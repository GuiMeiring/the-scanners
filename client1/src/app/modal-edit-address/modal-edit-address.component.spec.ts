import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAddressComponent } from './modal-edit-address.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('ModalEditAddressComponent', () => {
  let component: ModalEditAddressComponent;
  let fixture: ComponentFixture<ModalEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditAddressComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }],
      imports: [
        MatDialogModule
      ]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(ModalEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
