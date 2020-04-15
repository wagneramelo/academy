import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  
  counter:number = 0;
  names:Exercise[] = [];
  

  styleClock = {
    
  }
  constructor() { }

  ngOnInit(): void {
  }

  runClock = ()=>{

    this.names.map(mape => console.log(mape));
    
    setInterval(()=>{
      this.styleClock = {
        "background-color" : "black"
      }
      this.counter++
    },1000)
  }

}
