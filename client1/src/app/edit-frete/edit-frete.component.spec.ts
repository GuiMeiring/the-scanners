import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreteComponent } from './edit-frete.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('EditFreteComponent', () => {
  let component: EditFreteComponent;
  let fixture: ComponentFixture<EditFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFreteComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
    }],
    imports: [MatDialogModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
