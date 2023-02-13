import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProRequestsComponent } from './modal-pro-requests.component';

describe('ModalProRequestsComponent', () => {
  let component: ModalProRequestsComponent;
  let fixture: ComponentFixture<ModalProRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
