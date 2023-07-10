import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditProductRequestsComponent } from './modal-edit-product-requests.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('ModalEditProductRequestsComponent', () => {
  let component: ModalEditProductRequestsComponent;
  let fixture: ComponentFixture<ModalEditProductRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditProductRequestsComponent ],
          providers: [{
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }],
        imports: [
          MatDialogModule
        ]
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
