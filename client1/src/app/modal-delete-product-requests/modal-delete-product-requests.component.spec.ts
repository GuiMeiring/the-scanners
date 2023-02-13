import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteProductRequestsComponent } from './modal-delete-product-requests.component';

describe('ModalDeleteProductRequestsComponent', () => {
  let component: ModalDeleteProductRequestsComponent;
  let fixture: ComponentFixture<ModalDeleteProductRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteProductRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteProductRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
