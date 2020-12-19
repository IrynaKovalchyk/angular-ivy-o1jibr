import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../user-info';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent implements OnInit {

  personalInfoComplete = true;
  addressComplete = false;
  creditCardComplete = false;
  completedOrder = false;

  stepOne = false;
  stepTwo = false;
  stepThree = false;

  customer = false;



  customerInformation = [];


  fruite = ['apple','orange'];

  userInfoArray: UserInfo;

  name;

  constructor() { }

  ngOnInit() {
    console.log('Fruite' + this.fruite.push('banana'));
    console.log(this.fruite);

  }

  personalInfoSubmit() {
    this.personalInfoComplete = false;
    this.addressComplete = true;
    this.stepOne = true;
    this.customer = true;



    // this.customerInformation.push(this.userInfoArray.name);
    // this.customerInformation.push({
    //   name: this.userInfoArray.name,
    //   email: this.userInfoArray.email
    // });

    console.log('Your Info ' + this.name.userInfoArray);
  }

  addressSubmit() {
    this.addressComplete = false;
    this.creditCardComplete = true;
    this.stepTwo = true;
  }

  creditCardSubmit() {
    this.creditCardComplete = false;
    this.completedOrder = true;
    this.stepThree = true;
  }

}
