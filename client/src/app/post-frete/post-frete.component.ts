import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-post-frete',
  templateUrl: './post-frete.component.html',
  styleUrls: ['./post-frete.component.scss']
})
export class PostFreteComponent implements OnInit {
  fkProduct = 0;
  id : number = 0;
  total : number | undefined;
  desc : number | undefined;
  desconto : number = 0;
  fretes : Array<any>= [];
  public products : Array <any>=[];
  selectedProduct: number = 0;
  selectedTotal: number = 0;

  constructor(public dialogRef: MatDialogRef<PostFreteComponent>, private httpService : HttpService) { }

  async ngOnInit() {
    await this.getProducts();
  }

  calculaDesc(desconto : number) {
    desconto = desconto / 100;
  }

  async postFrete(){
     this.calculaDesc(this.desconto);
    console.log("aqui");
    this.fretes = await this.httpService.post('frete', { fkProduct : this.selectedProduct, total : this.selectedTotal, desc : this.desconto});
    console.log(this.fretes);
    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  public async getProducts(){
    this.products = await this.httpService.get('products');

  }

}
