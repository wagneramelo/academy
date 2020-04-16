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
  currentExercise:string = '';

  exerciseForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    repetitions: new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
    weight: new FormControl('',[Validators.required]),
  })


  constructor() { }

  ngOnInit(): void {
  }

  runClock = ()=>{
    if(this.exerciseList.length != 0){
      this.exerciseList.forEach((exercise,index) => {
        this.currentExercise = this.exerciseList[index].name
        var repetitions = exercise.repetitions;
        for(let i = 0; i<repetitions; i++){
          this.countDown();
        }
      });
    }
    else{
      alert('Please insert some exercises above.')
    }
  }

  addExercise = () => {
    if(this.exerciseForm.valid) this.exerciseList.push(this.exerciseForm.value);
  }

  setRestTimeInSeconds = seconds =>{
    this.restTimeinSeconds = seconds;
  }

  countDown = () =>{
    var intervalId = setInterval(()=>{
      if(this.counter < this.restTimeinSeconds)this.counter++;
      else {
        this.counter = 0; 
        clearInterval(intervalId);
      }
    },1000)
  }

}
