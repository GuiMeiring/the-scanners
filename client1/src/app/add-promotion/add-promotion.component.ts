import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {
promotion: any
description: any;
months: number | undefined;
ativo: boolean =true;
desconto: number | undefined;
meses: any;

  constructor(public dialogRef: MatDialogRef<AddPromotionComponent>, private httpService : HttpService) { }

  ngOnInit(): void {

  }
 onNoClick(): void {
    this.dialogRef.close();
}
async promotionAdd(){
  console.log(this.description);
  this.promotion= await this.httpService.post('promotion', { description: this.description,months:this.months,ativo:this.ativo,desconto:this.desconto});
  this.onNoClick();
}
}
