import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpClient: HttpClient) { }

  get(cep : String){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
