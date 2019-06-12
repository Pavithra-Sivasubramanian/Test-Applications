import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  countA: number;
  constructor(private countService: CountService) {
    countService.getCountA().subscribe(count => this.countA = count);
  }
  
  ngOnInit() {
  }

  incrementC() {
    this.countService.setCountC();
  }
}
