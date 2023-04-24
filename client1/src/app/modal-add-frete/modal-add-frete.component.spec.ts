import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddFreteComponent } from './modal-add-frete.component';

describe('ModalAddFreteComponent', () => {
  let component: ModalAddFreteComponent;
  let fixture: ComponentFixture<ModalAddFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddFreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
