import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/HttpService';

@Component({
  selector: 'app-addrequests',
  templateUrl: './addrequests.component.html',
  styleUrls: ['./addrequests.component.scss']
})
export class AddrequestsComponent implements OnInit {
  search: string ='';
  client : Array<any>= [];


  constructor(private router : Router, private httpService: HttpService) { }

  ngOnInit(): void {
    console.log("aqui");
  }


}
