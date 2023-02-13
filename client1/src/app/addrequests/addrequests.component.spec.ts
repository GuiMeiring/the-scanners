import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequestsComponent } from './addrequests.component';

describe('AddrequestsComponent', () => {
  let component: AddrequestsComponent;
  let fixture: ComponentFixture<AddrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
