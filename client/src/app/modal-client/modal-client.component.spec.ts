import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClientComponent } from './modal-client.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalClientComponent', () => {
  let component: ModalClientComponent;
  let fixture: ComponentFixture<ModalClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalClientComponent ],
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
 
    fixture = TestBed.createComponent(ModalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
