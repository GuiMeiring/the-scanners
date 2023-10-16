import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFreteComponent } from './post-frete.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('PostFreteComponent', () => {
  let component: PostFreteComponent;
  let fixture: ComponentFixture<PostFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFreteComponent ], 
      providers: [{
        provide: MatDialogRef,
        useValue: {}
    }],
    imports: [MatDialogModule, HttpClientModule]   
    })
    .compileComponents();
    fixture = TestBed.createComponent(PostFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
