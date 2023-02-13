import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.scss']
})
export class ModalDeleteUserComponent implements OnInit {
  id: any;
  user: Array<any>=[];

  constructor(public dialogRef: MatDialogRef<ModalDeleteUserComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async delete() {
    this.id= window.localStorage.getItem('id');
    console.log(this.id);
    this.user= await this.httpService.patch('user',{id: this.id});
    document.location.reload();
  }

}
