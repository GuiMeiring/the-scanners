import { Component, OnInit } from '@angular/core';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
import { CepServiceService } from '../cep-service.service';


@Component({
  selector: 'app-modal-add-clients',
  templateUrl: './modal-add-clients.component.html',
  styleUrls: ['./modal-add-clients.component.scss']
})
export class ModalAddClientsComponent implements OnInit {
  client: Array <any>=[];
  enderecos: Array <any>=[];
  name: string ='';
  cnpj: string ='';
  razaoSocial: string ='';
  startDate : Date = new Date(2022, 0, 1);
complemento: string ='';
pontoDeReferencia:string ='';
bairro: string ='';
rua: string ='';
numero: number | undefined;
cep: string ='';
cidade: string ='';
estado: string ='';


  constructor(public dialogRef: MatDialogRef<ModalAddClientsComponent>,private CepService : CepServiceService, private httpService : HttpService) { }

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
 
  async clientAdd() {
    this.client= await this.httpService.post('client', { name: this.name, cnpj: this.cnpj, razaoSocial: this.razaoSocial, dateClient: this.startDate, adddress:this.enderecos});
    this.onNoClick();
    }
    async addEndereco(){
      this.enderecos.push({"rua":this.rua,"bairro":this.bairro,
      "cidade":this.cidade,
      "estado":this.estado,
      "cep":this.cep,
      "numero":this.numero,
      "complemento":this.complemento,
      "pontoDeReferencia":this.pontoDeReferencia})
      console.log(this.enderecos);

    }

}
