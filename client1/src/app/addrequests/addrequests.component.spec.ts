import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequestsComponent } from './addrequests.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('AddrequestsComponent', () => {
  let component: AddrequestsComponent;
  let fixture: ComponentFixture<AddrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrequestsComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
    }],
      imports: [RouterTestingModule, HttpClientModule, MatDialogModule]
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
