import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  countB: number;
  constructor(private countService: CountService) {
    countService.getCountB().subscribe(count => this.countB = count);
  }

  ngOnInit() {
  }

  incrementA() {
    this.countService.setCountA();
  }
}
