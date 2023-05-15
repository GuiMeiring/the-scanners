import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPromotionComponent } from './principal-promotion.component';

describe('PrincipalPromotionComponent', () => {
  let component: PrincipalPromotionComponent;
  let fixture: ComponentFixture<PrincipalPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
