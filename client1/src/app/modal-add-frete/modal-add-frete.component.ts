import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
import { DialogDataRequests } from '../frete/frete.component';

@Component({
  selector: 'app-modal-add-frete',
  templateUrl: './modal-add-frete.component.html',
  styleUrls: ['./modal-add-frete.component.scss']
})
export class ModalAddFreteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalAddFreteComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataRequests) { }

  ngOnInit(): void {
  }

  description: string='';
  product: Array<any>=[];
  products: Array<any>=[];
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  async listarProdutos(){
    this.products= await this.httpService.get(`products`);
  }


    async addFrete(){
      
    }

    
}
