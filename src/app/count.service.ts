import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private countA = new BehaviorSubject<number>(0);
  private countB = new BehaviorSubject<number>(0);
  private countC = new BehaviorSubject<number>(0);
  newCountA: number = 0;
  newCountB: number = 0;
  newCountC: number = 0;

  constructor() { }
  getCountA(): Observable<number> {
    return this.countA.asObservable();
  }
  getCountB(): Observable<number> {
    return this.countB.asObservable();
  }
  getCountC(): Observable<number> {
    return this.countC.asObservable();
  }

  setCountA() {
    this.newCountA++;
    this.countA.next(this.newCountA);
  }
  setCountB() {
    this.newCountB++;
    this.countB.next(this.newCountB);
  }
  setCountC() {
    this.newCountC++;
    this.countC.next(this.newCountC);
  }
}
