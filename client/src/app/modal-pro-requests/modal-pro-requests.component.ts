import { Component, Inject, OnInit } from '@angular/core';import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
;
export interface DialogDataRequests {
  products: Array<any>;
  requests: Array<any>;
}

@Component({
  selector: 'app-modal-pro-requests',
  templateUrl: './modal-pro-requests.component.html',
  styleUrls: ['./modal-pro-requests.component.scss']
})
export class ModalProRequestsComponent implements OnInit {
  products :Array<any>=[];
  product :Array<any>=[];
  selectedProduct: number | undefined;
  amount: any;
  unitPrice: number | undefined;
discount: any;
increase: any;
total: any;

  constructor(public dialogRef: MatDialogRef<ModalProRequestsComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataRequests) { }

   async  ngOnInit() {
    await this.listarProducts();
  }
  async listarProducts(){
    this.products= await this.httpService.get('products');
    console.log(this.products);


  }
  async getProduct(){
    this.product= await this.httpService.get(`products/${this.selectedProduct}`);
    console.log(this.product);
  }
  async addEndereco(){
    this.data.products.push({"fkProducts": this.selectedProduct, "amount": this.amount, "unitPrice":this.unitPrice,"discount":this.discount,"increase":this.increase, "total": this.total})
    console.log(this.data.products);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  
  

}
