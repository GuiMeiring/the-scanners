import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogData {
  group: Array<any>;
  id: number;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  description: string = '';
  id : number =0;
  group: Array<any>= [];
  constructor(public dialogRef: MatDialogRef<ModalComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.group.push(this.data.group);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  async groupEdit(){
    this.group= await this.httpService.put(`group`,{description:this.description, id : this.data.id});
    console.log(this.group);
    this.group= await this.httpService.get(`group/${this.data.id}`);
    this.onNoClick();
  }
  async groupDelete(){
    this.group= await this.httpService.patch(`group/${this.data.id}`,{});
    this.onNoClick();
  }


}
