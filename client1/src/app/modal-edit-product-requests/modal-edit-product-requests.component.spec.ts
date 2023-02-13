import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditProductRequestsComponent } from './modal-edit-product-requests.component';

describe('ModalEditProductRequestsComponent', () => {
  let component: ModalEditProductRequestsComponent;
  let fixture: ComponentFixture<ModalEditProductRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditProductRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditProductRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
