import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
import { CepServiceService } from '../cep-service.service';
import { DialogDataClient } from '../modal-edit-address/modal-edit-address.component';

@Component({
  selector: 'app-modal-add-address',
  templateUrl: './modal-add-address.component.html',
  styleUrls: ['./modal-add-address.component.scss']
})
export class ModalAddAddressComponent implements OnInit {
  idEndereco: number | undefined;
  rua: string='';
  bairro: string ='';
  cidade: string='';
  estado: string ='';
  pontoDeReferencia: string ='';
  complemento: string ='';
  numero: string ='';
  cep: string ='';
  address: Array<any>=[];
  client: Array<any>=[];
  endereco: Array<any>=[];
  name: string ='';
  cnpj: number | undefined;
  razaoSocial: string ='';
  startDate : Date = new Date(2022, 0, 1);

  constructor(public dialogRef: MatDialogRef<ModalAddAddressComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataClient,private CepService : CepServiceService) { }

  ngOnInit(): void {
  }
  consultaCep(){

    this.CepService.get(String(this.cep)).subscribe((dados: any) => this.populaForm(dados));
  }

  populaForm(dados : any){
   this.cep = dados.cep,
   this.rua = dados.logradouro,
   this.bairro = dados.bairro,
   this.cidade = dados.localidade,
   this.estado = dados.uf
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async  add(){
    await this.addAddress();
    await this.editClient();
    this.onNoClick();
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
    this.address.push({"rua":this.rua,"bairro":this.bairro,
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
    console.log(this.address);

    this.client= await this.httpService.post(`client/${this.data.id}`,{address: this.address});

  }


}
