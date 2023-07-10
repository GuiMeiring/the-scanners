import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequestsComponent } from './addrequests.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AddrequestsComponent', () => {
  let component: AddrequestsComponent;
  let fixture: ComponentFixture<AddrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrequestsComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(AddrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
