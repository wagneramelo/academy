import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  
  counter:number = 0;
  exerciseList:Exercise[] = [];
  restTimeinSeconds:number = 60;

  exerciseForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    repetitions: new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
    weight: new FormControl('',[Validators.required]),
  })


  constructor() { }

  ngOnInit(): void {
  }

  runClock = ()=>{
    do{
    setInterval(()=>{
      this.counter++;
    },1000)
    }while(this.counter < 60)
  }

  addExercise = () => {
    this.exerciseList.push(this.exerciseForm.value);
  }

}
