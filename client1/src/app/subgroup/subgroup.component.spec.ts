import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupComponent } from './subgroup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('SubgroupComponent', () => {
  let component: SubgroupComponent;
  let fixture: ComponentFixture<SubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
    }],
      imports: [RouterTestingModule, HttpClientModule, MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
