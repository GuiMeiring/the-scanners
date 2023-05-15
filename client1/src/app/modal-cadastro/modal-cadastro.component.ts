import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.scss']
})
export class ModalCadastroComponent implements OnInit {

  users : Array<any> = [];
  user : string = "";
  name : string = "";
  username : string = "";
  password : string = "";
  cpassword : string = "";
  roles: string = "";
  hide: any;
  hide2: any;

  constructor(public dialogRef: MatDialogRef<ModalCadastroComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async postUser(){
    this.roles = "4";
    this.users = await this.httpService.post('user', {name : this.name, username : this.username,
    password : this.password, cpassword : this.cpassword, roles: this.roles})
    this.clear();
    this.onNoClick();
  }

  clear(){
    this.name = "";
    this.username = "";
    this.password = "";
    this.cpassword = "";
  }
}
