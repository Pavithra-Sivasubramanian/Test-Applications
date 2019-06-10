import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
  @Input("countB") countB: number; 
  @Output() countC: EventEmitter<number> = new EventEmitter();
  incrementC() {
    this.countC.emit();
  }

  countA = 0;
  onCountA() {
    this.countA++;
  }
}
