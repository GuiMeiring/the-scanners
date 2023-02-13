import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditUserComponent } from './modal-edit-user.component';

describe('ModalEditUserComponent', () => {
  let component: ModalEditUserComponent;
  let fixture: ComponentFixture<ModalEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
