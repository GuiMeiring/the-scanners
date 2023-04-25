import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/HttpService';
import { EditFreteComponent } from '../edit-frete/edit-frete.component';
import { PostFreteComponent } from '../post-frete/post-frete.component';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.scss']
})
export class FreteComponent implements OnInit {
  search: string='';
  add: any;
  edit: any;
  id : number = 0;
  fretes: Array<any>= [];
  freteedit: Array<any>= [];
  delete: any;
  frete: string = "";

  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.list();
    console.log(this.fretes);
  }

  editFrete(frete : any, id : any): void {
    const ref = this.dialog.open(EditFreteComponent, {
      width: '800px',
      data: {frete: frete, id : id}
    });
    ref.afterClosed().subscribe(result => {
      this.list();
    })
  }

  postFrete(): void {
    const ref = this.dialog.open(PostFreteComponent, {
      width: '600px'
    });
    ref.afterClosed().subscribe(result => {
      this.list();
    })
  }

  async list() {
    this.fretes = await this.httpService.get('fretes');
  }

}
