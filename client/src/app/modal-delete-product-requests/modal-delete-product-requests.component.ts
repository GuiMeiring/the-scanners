import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
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
  selector: 'app-modal-delete-product-requests',
  templateUrl: './modal-delete-product-requests.component.html',
  styleUrls: ['./modal-delete-product-requests.component.scss']
})




export class ModalDeleteProductRequestsComponent implements OnInit {
  product: Array<any>=[];
  total2: number=0;

  constructor(public dialogRef: MatDialogRef<ModalDeleteProductRequestsComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataRequests) { }

  ngOnInit(): void {
  }
  async deleteAddress() {
    this.total2 = parseFloat(`${this.data.total}`) - parseFloat(`${this.data.totalProduct}`);
    this.product= await this.httpService.patch(`ProdRequests/${localStorage.getItem("idProductRequestsEdit")}`,{total: this.total2, fkRequests: this.data.fkRequests});
    this.onNoClick();

    }
    onNoClick(): void {
      this.dialogRef.close();
    }

}
