import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFreteComponent } from './post-frete.component';

describe('PostFreteComponent', () => {
  let component: PostFreteComponent;
  let fixture: ComponentFixture<PostFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFreteComponent ]
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
