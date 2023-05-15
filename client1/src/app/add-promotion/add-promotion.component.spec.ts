import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromotionComponent } from './add-promotion.component';

describe('AddPromotionComponent', () => {
  let component: AddPromotionComponent;
  let fixture: ComponentFixture<AddPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
