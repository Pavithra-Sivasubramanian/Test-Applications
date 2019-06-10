import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {

  countC = 0;
  countB = 0;
  onCountC() {
    this.countC++;
  }
  
  incrementB() {
    this.countB++;
  }

}
