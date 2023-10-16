import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
import { DropdownComponent } from '../dropdown/dropdown.component'; 

@Component({
  selector: 'app-modal-add-subgroup',
  templateUrl: './modal-add-subgroup.component.html',
  styleUrls: ['./modal-add-subgroup.component.scss']
})
export class ModalAddSubgroupComponent implements OnInit {
  description: string = '';
  idGroup: number | undefined;
  subGroup: Array<any>= [];
  selectedGroup : number = 0;
  group : string = "";
  public groups : Array<any> = [];

  constructor(public dialogRef: MatDialogRef<ModalAddSubgroupComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
    this.getGroup();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public async getGroup(){
    this.groups= await this.httpService.get('group');
    console.log(this.group);

  }
  async subGroupAdd(){
    console.log(this.description);
    this.subGroup= await this.httpService.post('subgroup', { description: this.description, fkGroup: this.selectedGroup});
    this.onNoClick();
  }

}
