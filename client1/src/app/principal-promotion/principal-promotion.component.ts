import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/HttpService';
import { AddPromotionComponent } from '../add-promotion/add-promotion.component';
import { PromotionComponent } from '../promotion/promotion.component';

@Component({
  selector: 'app-principal-promotion',
  templateUrl: './principal-promotion.component.html',
  styleUrls: ['./principal-promotion.component.scss']
})
export class PrincipalPromotionComponent implements OnInit {

  add: any;
  promotion: Array<any>= [];
  search: string='';



    constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }


    ngOnInit(): void {
      this.listarpromotion();
    }

     addpromotion(): void {
      const ref = this.dialog.open(AddPromotionComponent, {
        width: '600px',

      });
      ref.afterClosed().subscribe( result => {
         this.listarpromotion();
      })
    }

     editpromotion(promotion: any, id:any): void {
      console.log(promotion);
      const ref = this.dialog.open( PromotionComponent, {
        width: '600px',
        data: {promotion: promotion, id : id}

      });
      ref.afterClosed().subscribe(result => {
          this.listarpromotion();
      })
      }


    async listarpromotion(){
      this.promotion= await this.httpService.get('promotion');
      console.log(this.promotion);


    }
}
