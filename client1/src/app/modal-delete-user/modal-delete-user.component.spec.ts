import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteUserComponent } from './modal-delete-user.component';

describe('ModalDeleteUserComponent', () => {
  let component: ModalDeleteUserComponent;
  let fixture: ComponentFixture<ModalDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
