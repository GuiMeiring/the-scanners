import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
import { CepServiceService } from '../cep-service.service';

export interface DialogDataClient {
  client : Array<any>;
  id: number;
  razaoSocial: string;
  name: string;
}

@Component({
  selector: 'app-modal-edit-address',
  templateUrl: './modal-edit-address.component.html',
  styleUrls: ['./modal-edit-address.component.scss']
})
export class ModalEditAddressComponent implements OnInit {
  idEndereco: number | undefined;
  rua: string='';
  bairro: string ='';
  cidade: string='';
  estado: string ='';
  pontoDeReferencia: string ='';
  complemento: string ='';
  numero: string ='';
  cep: string ='';
  editEndereco: Array<any>=[];
  client: Array<any>=[];
  endereco: Array<any>=[];
  name: string ='';
  cnpj: number | undefined;
  razaoSocial: string ='';
  startDate : Date = new Date(2022, 0, 1);


  constructor(public dialogRef: MatDialogRef<ModalEditAddressComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataClient, private CepService : CepServiceService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  consultaCep(){
    console.log("foi")
    this.CepService.get(String(this.cep)).subscribe((dados: any) => this.populaForm(dados));
  }

  populaForm(dados : any){
   this.cep = dados.cep,
   this.rua = dados.logradouro,
   this.bairro = dados.bairro,
   this.cidade = dados.localidade,
   this.estado = dados.uf
  }
  async  put(){
    await this.addAddress();
    await this.editClient();
    this.dialogRef.close();
  }
  public refresh(){
    this.rua='';
    this.bairro='';
    this.cidade='';
    this.estado='';
    this.cep='';
    this.numero='';
    this.complemento='';
    this.pontoDeReferencia='';
  }

  async addAddress(){
    this.editEndereco.push({"id":localStorage.getItem("idAddressEdit"),"rua":this.rua,"bairro":this.bairro,
    "cidade":this.cidade,
    "estado":this.estado,
    "cep":this.cep,
    "numero":this.numero,
    "complemento":this.complemento,
    "pontoDeReferencia":this.pontoDeReferencia})

  }
  async editClient(){
    console.log(this.data.name);
    console.log(this.data.razaoSocial);
    console.log(this.data.id);

    this.client= await this.httpService.put(`client`,{name:this.data.name,razaoSocial: this.data.razaoSocial, idClient  : this.data.id, address: this.editEndereco, idEndereco : localStorage.getItem("idAddressEdit")});

  }


}
