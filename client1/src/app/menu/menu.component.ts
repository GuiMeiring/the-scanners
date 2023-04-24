import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObserverService } from 'src/services/observer.service';
import { MenuItens } from '../menu-itens';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  opened = true;
  subscription: any = null;
  menu: Array<any> = [];
  item: Array<any> = [];
  roles: any;

  constructor(private observer: ObserverService, private router: Router) {
    this.item = MenuItens;
  }

  ngOnInit(): void {
    this.roles = window.localStorage.getItem('roles');
    this.attention();
    console.log(this.roles);
    this.subscription = this.observer.subscribe('menu-toggle', (data: any) => {
      this.opened = !this.opened;
    });
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe(this.subscription);
  }

  load() {
    location.reload();
  }

  check(roles: Array<any>) {
    console.log(roles);
    for (let b in roles) {
      if (roles[b] == this.roles) {
        return true;
      }
    }
    return false;
  }
  attention() {
    for (let i in this.item) {
      if (this.check(this.item[i].roles)) {
        this.menu.push(this.item[i]);
      }
    }
  }
}
