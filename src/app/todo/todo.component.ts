import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  Country = ['India', 'Pakistan', 'Sri Lanka', 'Bangladesh'];
  
  userModel = {
    name: "",
    password:"",
    gender:"",
    dateOfBirth:"",
    country:"default",
    interest:Array()
  };
  
  countryHasError:boolean = true;
  value:string = '';

  submitted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

 
  //update(value: string) { this.value = value; }


  validateCountry(value) {
    if (value === 'default') {
      this.countryHasError = true;
    } else {
      this.countryHasError = false;
    }
  }

  checkInterest(value) {
    if (this.userModel.interest.indexOf(value) === -1) {
      this.userModel.interest.push(value);
    } else {
      this.userModel.interest = this.userModel.interest.filter((job) => job !== value);
    }
  }

  onSubmit() {
    console.log(this.userModel);
  }

}
