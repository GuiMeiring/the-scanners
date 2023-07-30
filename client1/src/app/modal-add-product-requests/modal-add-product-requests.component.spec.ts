import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddProductRequestsComponent } from './modal-add-product-requests.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalAddProductRequestsComponent', () => {
  let component: ModalAddProductRequestsComponent;
  let fixture: ComponentFixture<ModalAddProductRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddProductRequestsComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
  }],
    imports: [MatDialogModule, HttpClientModule]   
    }) 
    .compileComponents();
    fixture = TestBed.createComponent(ModalAddProductRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
