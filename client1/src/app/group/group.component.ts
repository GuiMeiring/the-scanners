import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from 'src/services/HttpService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { ModalAddGroupComponent } from '../modal-add-group/modal-add-group.component';

export interface DialogData {
  group:Array<any>;
  id: number;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

add: any;
edit: any;
name : string = '';
description: string = '';
id : number =0;
group: Array<any>= [];
htmladd: number =0;
search: string='';
groupedit: Array<any>= [];
delete: any;
grupo: string='';


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }


  ngOnInit(): void {
    this.listarGroup();
  }

  editGroupModal(group : any, id: any): void {
    const ref = this.dialog.open(ModalComponent, {
      width: '800px',
      data: {group: group, id : id}
    });
    ref.afterClosed().subscribe(result => {
      this.listarGroup();
    })
  }
  postGroupModal(): void {
    const ref = this.dialog.open(ModalAddGroupComponent, {
      width: '600px'
    });
    ref.afterClosed().subscribe(result => {
      this.listarGroup();
    })
  }


  async listarGroup(){
    this.group= await this.httpService.get('group');


  }


}
