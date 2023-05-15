import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreteComponent } from './edit-frete.component';

describe('EditFreteComponent', () => {
  let component: EditFreteComponent;
  let fixture: ComponentFixture<EditFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
