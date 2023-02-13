import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddRequestsComponent } from './modal-add-requests.component';

describe('ModalAddRequestsComponent', () => {
  let component: ModalAddRequestsComponent;
  let fixture: ComponentFixture<ModalAddRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
