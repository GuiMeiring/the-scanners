import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/HttpService';
import { ModalAddFreteComponent } from '../modal-add-frete/modal-add-frete.component';
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
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.scss']
})
export class FreteComponent implements OnInit {

  constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listRequests();
  }
  search: any;
  requests: Array<any>=[];

  async listRequests(){
    this.requests= await this.httpService.get('requests');
  }

  public modalFrete(){
    
    const ref = this.dialog.open(ModalAddFreteComponent,{
      width: '800px',
      data:{ }

    });
    ref.afterClosed().subscribe((result: any) =>{
      this.listRequests();
    })

  }
}
