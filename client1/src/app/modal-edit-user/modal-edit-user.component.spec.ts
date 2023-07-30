import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditUserComponent } from './modal-edit-user.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalEditUserComponent', () => {
  let component: ModalEditUserComponent;
  let fixture: ComponentFixture<ModalEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditUserComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
  }],
  imports: [HttpClientModule, MatDialogModule]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(ModalEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
