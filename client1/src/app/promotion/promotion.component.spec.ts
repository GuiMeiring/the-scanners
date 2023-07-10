import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionComponent } from './promotion.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('PromotionComponent', () => {
  let component: PromotionComponent;
  let fixture: ComponentFixture<PromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
    }],
    imports: [MatDialogModule]
    })
    .compileComponents();
 
    fixture = TestBed.createComponent(PromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
