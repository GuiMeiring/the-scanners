import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalSubgroupComponent } from '../modal-subgroup/modal-subgroup.component';
import { ModalAddSubgroupComponent } from '../modal-add-subgroup/modal-add-subgroup.component';
export interface DialogDataSubGroup {
  subgroup: Array<any>;
  id: number;
  fkGroup:number;
}

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {
edit: any;
group: Array<any>= [];
subGroup: Array<any>= [];
search: string='';
id: number=0;
description: string='';
fkGroup:number=0;


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }


  ngOnInit(): void {
    this.listarSubgroup();
  }

  EditSubgroupModal(subgroup:any,id:any,fkGroup:any): void {
    const ref = this.dialog.open(ModalSubgroupComponent, {
      width: '800px',
      data:{subgroup:subgroup, id:id,fkGroup:fkGroup}
    });
    ref.afterClosed().subscribe(result => {
      this.listarSubgroup();
    })
  }
  PostSubgroupModal(): void {
    const ref = this.dialog.open(ModalAddSubgroupComponent, {
      width: '600px',
    });
    ref.afterClosed().subscribe(result => {
      this.listarSubgroup();
    })
  }


  async listarSubgroup(){
    this.subGroup= await this.httpService.get('subgroup');
    console.log(this.subGroup);


  }
  


}
