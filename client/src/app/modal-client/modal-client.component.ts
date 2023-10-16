import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
import { ModalAddAddressComponent } from '../modal-add-address/modal-add-address.component';
import { ModalDeleteAddressComponent } from '../modal-delete-address/modal-delete-address.component';
import { ModalEditAddressComponent } from '../modal-edit-address/modal-edit-address.component';
export interface DialogDataClient {
  client : Array<any>;
  id: number;
  razaoSocial: string;
  name: string;
}

@Component({
  selector: 'app-modal-client',
  templateUrl: './modal-client.component.html',
  styleUrls: ['./modal-client.component.scss']
})
export class ModalClientComponent implements OnInit {

  client: Array<any>=[];
  endereco: Array<any>=[];
  editEndereco: Array<any>=[];
  name: string ='';
  cnpj: number | undefined;
  razaoSocial: string ='';
  startDate : Date = new Date(2022, 0, 1);
  rua: string='';
  bairro: string ='';
  cidade: string='';
  estado: string ='';
  pontoDeReferencia: string ='';
  complemento: string ='';
  numero: string ='';
  cep: string ='';
  selectedEndereco: number =0;






  constructor(public dialogRef: MatDialogRef<ModalClientComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataClient,
    private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getClient();
    this.getEndereco();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async editClient(){
    this.client= await this.httpService.put(`client`,{name:this.name,razaoSocial: this.razaoSocial, idClient  : this.data.id, address: this.editEndereco, idEndereco : this.selectedEndereco});
  }
  async getClient(){
    this.client = await this.httpService.get(`client/${this.data.id}`);
    console.log(this.client);
  }
  async getEndereco(){
    this.endereco= await this.httpService.get(`clientEndereco/${this.data.id}`);
    console.log(this.endereco);
  }
  async deleteClient(){
    this.client= await this.httpService.patch(`client/${this.data.id}`,{});
    this.dialogRef.close();
  }
  async put(){
    if(this.name ==''){
      this.name= this.data.name;
    }
    if(this.razaoSocial==''){
      this.razaoSocial= this.data.razaoSocial;
    }
    console.log(this.name);
    console.log(this.razaoSocial);
    await this.addAddress();
    await this.editClient();
    await this.getClient();

  }
  public refresh(){
    this.selectedEndereco=0;
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
    this.editEndereco.push({"id":this.selectedEndereco,"rua":this.rua,"bairro":this.bairro,
    "cidade":this.cidade,
    "estado":this.estado,
    "cep":this.cep,
    "numero":this.numero,
    "complemento":this.complemento,
    "pontoDeReferencia":this.pontoDeReferencia})

  }
  openDialog(id: any){
    window.localStorage.setItem('idAddressEdit', id);
    const dialogoRef = this.dialog.open(ModalEditAddressComponent, {
      width: '600px',
        data: {client: this.data.client, id : this.data.id, razaoSocial: this.data.razaoSocial, name : this.data.name}
    });
    dialogoRef.afterClosed().subscribe((result : any) => {
      this.getEndereco();
      this.getClient();
    })
  }
  openDeleteAddress(id: any){
    window.localStorage.setItem('idAddressEdit', id);
    const dialogoRef = this.dialog.open(ModalDeleteAddressComponent, {
      width: '400px',
    });
    dialogoRef.afterClosed().subscribe((result : any) => {
      this.getEndereco();
      this.getClient();
    })
  }
    openAddAddress(){
      const dialogoRef = this.dialog.open(ModalAddAddressComponent, {
        width: '600px',
        data: {client: this.data.client, id : this.data.id, razaoSocial: this.data.razaoSocial, name : this.data.name}
      });
      dialogoRef.afterClosed().subscribe((result : any) => {
        this.getEndereco();
        this.getClient();
      })
  }



  async deleteAddress(id : any) {
    this.endereco= await this.httpService.patch(`ClientsEndereco/${id}`,{});
    this.getEndereco();
    this.getClient();

    }
    cancelar(){
      this.selectedEndereco=0;
    }

}


