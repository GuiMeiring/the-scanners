import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
import { ModalAddProductRequestsComponent } from '../modal-add-product-requests/modal-add-product-requests.component';
import { ModalDeleteProductRequestsComponent } from '../modal-delete-product-requests/modal-delete-product-requests.component';
import { ModalEditProductRequestsComponent } from '../modal-edit-product-requests/modal-edit-product-requests.component';
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
  fkProduct: number;
  totalProduct: number;
  fkRequests: number;
}
@Component({
  selector: 'app-modal-edit-requests',
  templateUrl: './modal-edit-requests.component.html',
  styleUrls: ['./modal-edit-requests.component.scss']
})
export class ModalEditRequestsComponent implements OnInit {

  requests: Array<any>=[];
  products: Array<any>=[];
  address: Array<any>=[];
  startDate: Date=new Date();
  selectedAddress: number=this.data.fkAddress;
  DateDelivery: Date= this.data.DateDelivery;

  constructor(public dialogRef: MatDialogRef<ModalEditRequestsComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataRequests, private dialog : MatDialog) { }

  async ngOnInit(){
    await this.listaProducts();
    await this.listaRequests();
    await this.listaAddress();
  }
  async listaRequests(){
    this.requests=  await this.httpService.get(`requests/${this.data.id}`);
    console.log(this.requests);
  }
  async listaProducts(){
    this.products=  await this.httpService.get(`ProdRequests/${this.data.id}`);
    console.log(this.products);
  }
  async listaAddress(){
        this.address= await this.httpService.get(`clientEndereco/${this.data.fkClients}`);
        console.log(this.address);
   }
   openDeleteProduct(id: any, salePrice: number, fkProduct: number,totalProduct: number, fkRequests: number ){
    window.localStorage.setItem('idProductRequestsEdit', id);
    const dialogoRef = this.dialog.open(ModalDeleteProductRequestsComponent, {
      width: '400px',
      data: {requests: this.data.requests, id: this.data.id, fkClients: this.data.fkClients,  DateEmission: this.startDate, DateDelivery: this.DateDelivery, fkAddress: this.selectedAddress, total: this.data.total,prodRequests: this.products, salePrice : salePrice, fkProduct: fkProduct, totalProduct: totalProduct, fkRequests: fkRequests}
    });
    dialogoRef.afterClosed().subscribe((result : any) => {
      this.listaProducts();
      this.listaRequests();
    })
  }
   openEditProduct(id: any, salePrice: number, fkProduct: number,totalProduct: number, fkRequests: number ){
    console.log(salePrice);
    window.localStorage.setItem('idProductRequestsEdit', id);
      const dialogoRef = this.dialog.open(ModalEditProductRequestsComponent, {
        width: '600px',

        data: {requests: this.data.requests, id: this.data.id, fkClients: this.data.fkClients,  DateEmission: this.startDate, DateDelivery: this.DateDelivery, fkAddress: this.selectedAddress, total: this.data.total,prodRequests: this.products, salePrice : salePrice, fkProduct: fkProduct, totalProduct: totalProduct, fkRequests: fkRequests}
      });
      dialogoRef.afterClosed().subscribe(async (result : any) => {
          this.listaProducts();
         this.listaRequests();
      })

    }
    openAddProduct(){
        const dialogoRef = this.dialog.open(ModalAddProductRequestsComponent, {
          width: '600px',

          data: { id: this.data.id, total: this.data.total}
        });
        dialogoRef.afterClosed().subscribe((result : any) => {
          this.listaProducts();
          this.listaRequests();
        })

      }
    onNoClick(): void {
      this.dialogRef.close();
    }


    async requestsDelete(){
      this.requests= await this.httpService.patch(`requests/${this.data.id}`,{});
      this.onNoClick();
    }

    async editRequests() {
      console.log(this.data.id);
    console.log(this.products);
      this.requests= await this.httpService.put('requests', {fkClients: this.data.fkClients,  DateEmission: this.startDate, DateDelivery: this.DateDelivery, fkAddress: this.selectedAddress, total: this.data.total,prodRequests: this.products, fkRequests: this.data.id} );
      this.onNoClick();
      }

  }
