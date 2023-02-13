import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditRequestsComponent } from './modal-edit-requests.component';

describe('ModalEditRequestsComponent', () => {
  let component: ModalEditRequestsComponent;
  let fixture: ComponentFixture<ModalEditRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
