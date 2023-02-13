import { Component, Inject, OnInit } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogDataSubGroup {
  subgroup: Array<any>;
  id: number;
  fkGroup: number;
}
@Component({
  selector: 'app-modal-subgroup',
  templateUrl: './modal-subgroup.component.html',
  styleUrls: ['./modal-subgroup.component.scss']
})
export class ModalSubgroupComponent implements OnInit {
  description: string = '';
  id : number | undefined;
  idGroup: number | undefined;
  subGroup: Array<any>= [];
  group: Array<any>= [];
  
  selectedGroup : number = 0;
  
  constructor(public dialogRef: MatDialogRef<ModalSubgroupComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataSubGroup) { }

  ngOnInit(): void {
    this.subGroup.push(this.data.subgroup);
    this.getGroup();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async getGroup(){
    this.group= await this.httpService.get(`group/${this.data.fkGroup}`);

  }
  async subGroupAdd(){
    this.subGroup= await this.httpService.post('subgroup', { description: this.description, fkGroup: this.idGroup});
    this.onNoClick();
  }
  async subgroupEdit(){
    this.subGroup= await this.httpService.put(`subgroup`,{description:this.description, id : this.data.id});
    console.log(this.subGroup);
    this.onNoClick();
  }
  async subgroupDelete(){
    this.group= await this.httpService.patch(`subgroup/${this.data.id}`,{});
    this.onNoClick();
  }

}
