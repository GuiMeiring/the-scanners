import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastroComponent } from '../modal-cadastro/modal-cadastro.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide : boolean = true;
  form!: FormGroup;


  constructor(private fb: FormBuilder, private router : Router, private httpclient : HttpClient, public dialog : MatDialog) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    })
   }

  ngOnInit(): void {
  }

  isValidForm(): boolean {
    return this.form.valid; //True - False
  }


  login(){

    this.httpclient.post('http://localhost:3007/logon', {username : this.form.controls['username'].value, password : this.form.controls['password'].value}).toPromise().then((response : any)=> {
      console.log(response);
      if(response.token){
        window.localStorage.setItem('token', response.token);
        console.log("Logado");
        window.localStorage.setItem('roles', response.user.roles)

        window.localStorage.setItem('id', response.user.id);
        this.router.
      navigateByUrl('');


      }

    })
  }
  cadastro(){
    const ref = this.dialog.open(ModalCadastroComponent, {
      width: '600px'
    });
    ref.afterClosed().subscribe(result => {

    })

  }
}
