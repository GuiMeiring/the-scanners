import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
    }],
      imports: [RouterTestingModule, HttpClientModule, MatDialogModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar se o formulário é inválido', () =>{
    const result = component.isValidForm();
    expect(result).toBe(false);

  })

  it('Deve retornar se o formulário é válido', () =>{
    component.form.controls['username'].setValue('Gui');
    component.form.controls['password'].setValue('teste123');
    const result = component.isValidForm();
    expect(result).toBe(true);

  })

  it('Desabilitar botao quando formulario invalido', () =>{
    const button = fixture.debugElement;

    expect(button.nativeElement.querySelector('.btn-login').disabled).toBeTrue();
  })

  it('Habilitar botao quando formulario valido', () =>{

    const button = fixture.debugElement.nativeElement.querySelector('.btn-login');
    component.form.controls['username'].setValue('Gui');
    component.form.controls['password'].setValue('teste123');

    fixture.detectChanges();// detectação de mudança

    expect(button.disabled).toBeFalse();
  })

});
