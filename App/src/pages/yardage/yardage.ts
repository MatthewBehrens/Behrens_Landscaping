import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-yardage',
  templateUrl: 'yardage.html'
})

export class YardagePage {

	public yards: any;
  public cubicFeet: any;
  public length: any;
  public width: any;
  public depth: any;

  constructor(public navCtrl: NavController, private builder: FormBuilder) {
    
  }

  onSubmit(formData) {
    this.length = formData.value.length;
    this.width = formData.value.width;
    this.depth = formData.value.depth;
    this.cubicFeet = this.length * this.width * (this.depth/12);
    this.yards = (this.cubicFeet/27)
    this.yards = (Math.round(this.yards * 2) / 2).toFixed(1)
  }
}
