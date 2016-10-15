import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-yardage',
  templateUrl: 'yardage.html'
})
export class YardagePage {

	private myData: any;
  constructor(public navCtrl: NavController, private builder: FormBuilder) {

  }

  onSubmit(formData) {
  	console.log('Form data is ', formData.value);
    this.myData = formData.value;

    let length = this.myData.length;
    let width = this.myData.width;
    let depth = this.myData.depth;
    console.log(length);
    console.log(width);
    console.log(depth);

    let cubicFeet = length * width * (depth/12);
    console.log(cubicFeet);
    let yards = (cubicFeet/27)
    console.log(yards);

    this.yards = Math.round(yards)
  }
}
