import { Component, Input, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => DropdownComponent),
    multi: true
    }]
  
})
export class DropdownComponent implements OnInit {
  @Input() title : string = '';
  @Input() array : Array<any> =[];
  @Input() idField : string = 'id';
  @Input() textField : string = 'description';
  @Output() select = new EventEmitter<any>();
  
  private _value = '';

  public get value() : string{
      return this._value;
  }
  public set value(v : string){
      if(v != this._value){
          this._value = v;
          this.onChange(v);
          this.onTouched();
      }
  }
  constructor(private HttpClient : HttpClient, public dialog: MatDialog) { }

  onChange = (_ : any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this._value = value;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  async ngOnInit() {
    
  }

  public selectChange(item : any){
    setTimeout(() => {
      this.select.emit(item);  
    }, 100);    
  }
  
}
