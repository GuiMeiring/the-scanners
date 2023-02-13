import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-modal-delete-address',
  templateUrl: './modal-delete-address.component.html',
  styleUrls: ['./modal-delete-address.component.scss']
})

export class ModalDeleteAddressComponent implements OnInit {
  address: Array<any>=[];

  constructor(public dialogRef: MatDialogRef<ModalDeleteAddressComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
  }

  async deleteAddress() {
    this.address= await this.httpService.patch(`ClientsEndereco/${localStorage.getItem("idAddressEdit")}`,{});
    this.onNoClick();
   
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

}
