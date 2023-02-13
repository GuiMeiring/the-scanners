import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogDataLogin {
  user: Array<any>;
  id: number;
}

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.scss']
})
export class ModalEditUserComponent implements OnInit {
hide: any;
password: string='';
cpassword: string='';
user: Array<any>=[];
id:any;

  constructor(public dialogRef: MatDialogRef<ModalEditUserComponent>, private httpService : HttpService,) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async editSenha() {
    this.id= window.localStorage.getItem('id');
    console.log(this.id);
    this.user= await this.httpService.patch(`user/${this.id}`,{password: this.password, cpassword: this.cpassword});
    this.dialogRef.close();
  }


}
