import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
export interface DialogDataPromotion {promotion : any, id : number}


@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  promotion: Array<any>= [];
  description: any;
  months:number | undefined;
  ativo: boolean = true;
  desconto:number | undefined;
  constructor(public dialogRef: MatDialogRef<PromotionComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataPromotion) { }

  ngOnInit(): void {
    this.promotion.push(this.data.promotion);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async promotionEdit(){
    console.log(this.description)
    this.promotion= await this.httpService.put(`promotion`,{description:this.description, id : this.data.id,months:this.months,ativo:this.ativo,desconto:this.desconto});
    console.log(this.promotion);
    this.promotion= await this.httpService.get(`promotion/${this.data.id}`);
    this.onNoClick();
  }
  async promotionDelete(){
    this.promotion= await this.httpService.patch(`promotion/${this.data.id}`,{});
    this.onNoClick();
  }


}
