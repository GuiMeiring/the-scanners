import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/HttpService';
import { ModalAddRequestsComponent } from '../modal-add-requests/modal-add-requests.component';
import { ModalEditAddressComponent } from '../modal-edit-address/modal-edit-address.component';
import { ModalEditRequestsComponent } from '../modal-edit-requests/modal-edit-requests.component';

export interface DialogDataRequests {
  requests: Array<any>;
  id: number;
  fkClients:number;
  DateEmisson: Date;
  DateDelivery: Date;
  fkAddress: number;
  total: number;
  prodRequests: Array<any>;
  salePrice: number;
}

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

search: any;
add: any;
requests: Array<any>=[];

  constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listRequests();
  }
  public postRequests() {
    const ref = this.dialog.open(ModalAddRequestsComponent, {
      width: '800px',
      data: {requests: this.requests}
    });
    ref.afterClosed().subscribe((result: any) => {
      this.listRequests();
    })
  }
  public modalEditRequests(id: number, requests: Array<any>, fkClients: number, DateEmission: Date, DateDelivery: Date, fkAddress: number, total: number){
    console.log(fkClients);
    const ref = this.dialog.open(ModalEditRequestsComponent,{
      width: '800px',
      data:{id : id, requests: requests, fkClients: fkClients, DateEmission: DateEmission,DateDelivery: DateDelivery, fkAddress: fkAddress, total: total }

    });
    ref.afterClosed().subscribe((result: any) =>{
      this.listRequests();
    })

  }
  

  async listRequests(){
    this.requests= await this.httpService.get('requests');

  }
    }


