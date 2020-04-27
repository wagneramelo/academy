import { Component, OnInit, HostBinding } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  
  counter:number = 0;
  isClockTriggered:boolean = false;

  @HostBinding("style.--time-sec") private cssTime: string;

  exerciseList:Exercise[] = [];
  restTimeinSeconds:number = 60;
  currentExercise:string = '';
  exerciseNumber:number = 0;
  step:number = 0;


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

      try{
      var repetitions = this.exerciseList[this.exerciseNumber].repetitions; 
      this.currentExercise = this.exerciseList[this.exerciseNumber].name
      }catch(ex){
        alert('You are done with your trainer today. Good job!');
        return;
      }

      if(this.step < repetitions){
        this.step++
      }
      else{
        this.exerciseNumber++;
        this.currentExercise = "Rest before the next exercise."
        this.step = 0;
      }           
      this.countDown();

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
    this.cssTime = seconds + "s";
  }

  countDown = () =>{
    this.isClockTriggered = !this.isClockTriggered;
    var intervalId = setInterval(()=>{
      if(this.counter < this.restTimeinSeconds)this.counter++;
      else {
        this.counter = 0; 
        this.isClockTriggered = false;
        clearInterval(intervalId);
      }
    },1000)
  }


}
