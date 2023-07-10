import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditRequestsComponent } from './modal-edit-requests.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('ModalEditRequestsComponent', () => {
  let component: ModalEditRequestsComponent;
  let fixture: ComponentFixture<ModalEditRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditRequestsComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
    }],
    imports: [MatDialogModule]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(ModalEditRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
