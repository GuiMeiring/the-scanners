import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddProductRequestsComponent } from './modal-add-product-requests.component';

describe('ModalAddProductRequestsComponent', () => {
  let component: ModalAddProductRequestsComponent;
  let fixture: ComponentFixture<ModalAddProductRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddProductRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddProductRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
