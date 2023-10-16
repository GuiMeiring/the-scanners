import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteComponent } from './frete.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('FreteComponent', () => {
  let component: FreteComponent;
  let fixture: ComponentFixture<FreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
    }],
      imports: [RouterTestingModule, HttpClientModule, MatDialogModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
