import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  countC: number;
  constructor(private countService: CountService) {
    countService.getCountC().subscribe((count: number) => this.countC = count);
  }

  ngOnInit() {
  }

  incrementB() {
    this.countService.setCountB();
  }
}
