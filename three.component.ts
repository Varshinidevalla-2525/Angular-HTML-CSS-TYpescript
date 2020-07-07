import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './three.component.html',
  styleUrls:['./three.component.css']
})
export class threeComponent {
  clientValues:any=[];
  edit:number=-1;
  disVal:number;
  totalDetail=[];
  clientDetails:any=[];
  constructor(private fb: FormBuilder){
    this.clientValues= JSON.parse(localStorage.getItem('clientDetails'));
  }
  update(clientID) {
    this.totalDetail=[];
    for(let item of this.clientValues){
      if(item.clientID!=clientID){
        this.totalDetail.push(item.value);
        console.log(item,item.value);
      }else{
        const itemForm = {
          clientName: document.getElementById(clientID+'ID'),
          clientID: document.getElementById(clientID+'ID'),
          clientAddress: document.getElementById(clientID+'Address'),
          clientCity: document.getElementById(clientID+'City'),
          clientCountry: document.getElementById(clientID+'Country')
        };
        this.totalDetail.push(itemForm);

      }
    }
    localStorage.setItem("clientDetails", JSON.stringify(this.totalDetail));
  }
}
