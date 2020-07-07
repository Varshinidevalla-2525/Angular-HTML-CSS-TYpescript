import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './one.component.html',
  styleUrls:['./one.component.css']
})
export class oneComponent {
  formGroup: any = [];
  clientDetails:any=[];
  constructor(private fb: FormBuilder) { }
  form = this.fb.group({
    clientName: [''],
    clientID: [''],
    clientAddress: [''],
    clientCity:[''],
    clientCountry:['']
  });
  totalDetail=[];
  onSubmit() {
    this.totalDetail=[];
    if(localStorage.getItem("clientDetails")!=null){
      this.totalDetail=JSON.parse(localStorage.getItem("clientDetails"));
    }
    this.totalDetail.push(this.form.value);
    localStorage.setItem("clientDetails", JSON.stringify(this.totalDetail));
  }
}
