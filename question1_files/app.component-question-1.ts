import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(){}
  counter : number = 50;
  
  ngOnInit(){}
  incrementCounter(){
    this.counter = this.counter+1 ;
    this.getCounter();
  }

  resetCounter(){
    this.counter = 0;
    this.getCounter();
  }

  getCounter() :number {
    return this.counter;
  }
}
