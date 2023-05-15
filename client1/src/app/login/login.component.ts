import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastroComponent } from '../modal-cadastro/modal-cadastro.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string = 'Gui';
  password : string = 'teste123';
  hide : boolean = true;

  constructor(private router : Router, private httpclient : HttpClient, public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  login(){

    this.httpclient.post('http://localhost:3007/logon', {username : this.username, password : this.password}).toPromise().then((response : any)=> {
      console.log(response);
      if(response.token){
        window.localStorage.setItem('token', response.token);
        console.log("Logado");
        window.localStorage.setItem('roles', response.user.roles)

        window.localStorage.setItem('id', response.user.id);
        this.router.navigateByUrl('');


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
