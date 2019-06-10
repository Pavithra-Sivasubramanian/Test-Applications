import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {

  @Input('countB') countB: number;
  @Output() countA: EventEmitter<number> = new EventEmitter();
  incrementA() {
    this.countA.emit();
  }
}
