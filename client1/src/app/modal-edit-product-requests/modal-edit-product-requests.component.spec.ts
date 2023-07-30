import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditProductRequestsComponent } from './modal-edit-product-requests.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalEditProductRequestsComponent', () => {
  let component: ModalEditProductRequestsComponent;
  let fixture: ComponentFixture<ModalEditProductRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditProductRequestsComponent ],
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
  
    fixture = TestBed.createComponent(ModalEditProductRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
