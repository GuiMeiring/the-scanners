import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from 'src/services/HttpService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalEditUserComponent } from '../modal-edit-user/modal-edit-user.component';
import { ModalDeleteUserComponent } from '../modal-delete-user/modal-delete-user.component';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  users : Array<any> = [];
  user : string = "";
  name : string = "";
  username : string = "";
  password : string = "";
  cpassword : string = "";
  roles: string = "";
hide: any;
hide2: any;
  constructor(private httpService : HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.get()
  }

  async get(){
    this.users = await this.httpService.get('user')
  }
  async postUser(){
    this.users = await this.httpService.post('user', {name : this.name, username : this.username,
    password : this.password, cpassword : this.cpassword, roles: this.roles})
    this.clear();
    this.ngOnInit()
  }
  clear(){
    this.name = "";
    this.username = "";
    this.password = "";
    this.cpassword = "";
    this.roles = "";
  }
  modalEdit(): void {
    const ref = this.dialog.open(ModalEditUserComponent, {
      width: '600px',
    });
    ref.afterClosed().subscribe(result => {
      this.get();
    })
  }
  
  modalDelete(): void {
    const ref = this.dialog.open(ModalDeleteUserComponent, {
      width: '400px'
    });
    ref.afterClosed().subscribe(result => {
      this.get();
    })
    
  }

}
