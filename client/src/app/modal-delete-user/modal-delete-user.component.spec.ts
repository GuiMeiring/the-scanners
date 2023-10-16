import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteUserComponent } from './modal-delete-user.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalDeleteUserComponent', () => {
  let component: ModalDeleteUserComponent;
  let fixture: ComponentFixture<ModalDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteUserComponent ],
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
  
    fixture = TestBed.createComponent(ModalDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
