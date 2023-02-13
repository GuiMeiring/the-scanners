import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-modal-add-products',
  templateUrl: './modal-add-products.component.html',
  styleUrls: ['./modal-add-products.component.scss']
})
export class ModalAddProductsComponent implements OnInit {
  products: Array <any>=[];
  public group : Array <any>=[];
  subgroup: Array <any>=[];
  public collection : Array <any>=[];
  description: string | undefined;
  salePrice: number | undefined;
  selectedGroup: number=0;
  selectedSubgroup: number=0;
  selectedCollection: number=0;


  constructor(public dialogRef: MatDialogRef<ModalAddProductsComponent>, private httpService : HttpService) { }

  async ngOnInit() {
    await this.getGroup();
    await this.getSubgroup();
    await this.getCollection();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }



  public async getGroup(){
    this.group= await this.httpService.get('group');

  }
  public async getSubgroup(){
    this.subgroup= await this.httpService.get('subgroup');
    console.log(this.subgroup);

  }
  public async getCollection(){
    this.collection= await this.httpService.get('collection');

  }
  async addProducts(){
    this.products= await this.httpService.post('products/',{description: this.description, fkGroup: this.selectedGroup, fkSubGroup: this.selectedSubgroup, fkCollection: this.selectedCollection, salePrice: this.salePrice});
    this.onNoClick();
  }

}
