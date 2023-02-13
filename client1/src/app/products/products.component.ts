import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from 'src/services/HttpService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { ModalAddGroupComponent } from '../modal-add-group/modal-add-group.component';
import { ModalAddProductsComponent } from '../modal-add-products/modal-add-products.component';
import { ModalProductsComponent } from '../modal-products/modal-products.component';

export interface DialogDataProducts {
  products : Array <any>;
  id: number;
  description: string;
  salePrice:number;
  fkGroup: number;
  fkSubgroup: number;
  fkCollection: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
add: any;

search: string='';
products: Array <any>=[];
group: Array <any>=[];
subgroup: Array <any>=[];
collection: Array <any>=[];


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listarProducts();
  }
  postModalProducts() {
    const ref = this.dialog.open(ModalAddProductsComponent, {
      width: '600px'
    });
    ref.afterClosed().subscribe(result => {
      this.listarProducts();
    })
    }
  modalEditar(products: any,id: any, fkGroup:any, fkSubgroup:any, fkCollection:any,) {
    const ref = this.dialog.open(ModalProductsComponent, {
      width: '800px',
      data: {products: products,id : id,fkGroup: fkGroup, fkSubgroup: fkSubgroup, fkCollection : fkCollection}

    });
    ref.afterClosed().subscribe(result => {
      this.listarProducts();
    })

    }
    async listarProducts(){
      this.products= await this.httpService.get('products');


    }
    async listarGroup(){
      this.group= await this.httpService.get('group');
  
  
    }
    async listarSubgroup(){
      this.subgroup= await this.httpService.get('subgroup');
  
  
    }
    async listarCollection(){
      this.collection= await this.httpService.get('collection');
      console.log(this.collection);


    }

}
