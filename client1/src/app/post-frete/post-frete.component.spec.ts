import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFreteComponent } from './post-frete.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('PostFreteComponent', () => {
  let component: PostFreteComponent;
  let fixture: ComponentFixture<PostFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFreteComponent ], 
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
    }],
    imports: [MatDialogModule]   
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
