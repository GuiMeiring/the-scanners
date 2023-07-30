import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubgroupComponent } from './modal-subgroup.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalSubgroupComponent', () => {
  let component: ModalSubgroupComponent;
  let fixture: ComponentFixture<ModalSubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSubgroupComponent ],
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
 
    fixture = TestBed.createComponent(ModalSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
