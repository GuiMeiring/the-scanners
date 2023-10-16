import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogDataFretes {
  fretes: any;
  id: number;
}

@Component({
  selector: 'app-edit-frete',
  templateUrl: './edit-frete.component.html',
  styleUrls: ['./edit-frete.component.scss']
})

export class EditFreteComponent implements OnInit {
  fkProduct = 0;
  id : number = 0;
  total : number | undefined;
  desc : number | undefined;
  desconto : number = 0;
  fretes : Array<any>= [];
  public products : Array <any>=[];
  selectedProduct: number = 0;
  selectedTotal: number = 0;

  constructor( public dialogRef: MatDialogRef<EditFreteComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataFretes) {}

  ngOnInit(): void {
    this.fretes.push(this.data.fretes);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  async freteEdit(){
    this.fretes = await this.httpService.put(`frete`,{fkProduct : this.selectedProduct, total : this.selectedTotal, desc : this.desconto, id : this.data.id});
    console.log(this.fretes);
    this.fretes = await this.httpService.get(`frete/${this.data.id}`);
    this.cancel();
  }

  async FretesDelete(){
    this.fretes = await this.httpService.patch(`frete/${this.data.id}`,{});
    this.cancel();
  }

}
