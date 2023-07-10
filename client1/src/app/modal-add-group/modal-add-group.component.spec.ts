import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAddGroupComponent } from './modal-add-group.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ModalAddGroupComponent', () => {
  let component: ModalAddGroupComponent;
  let fixture: ComponentFixture<ModalAddGroupComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddGroupComponent ],
      providers: [{
        provide: MatDialogModule,
        useValue: {}
    }],
    imports: [MatDialogModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
