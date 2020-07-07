import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './two.component.html',
  styleUrls:['./two.component.css']
})
export class twoComponent{
  clientValues:any=[];
  constructor(){
    this.clientValues= JSON.parse(localStorage.getItem('clientDetails'));
  }
}
