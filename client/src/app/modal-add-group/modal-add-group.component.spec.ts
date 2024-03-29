import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAddGroupComponent } from './modal-add-group.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalAddGroupComponent', () => {
  let component: ModalAddGroupComponent;
  let fixture: ComponentFixture<ModalAddGroupComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddGroupComponent ],
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

    fixture = TestBed.createComponent(ModalAddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
