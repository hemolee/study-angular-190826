import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {
  test =1;

  @Input() inputData:string; //부모컴포넌트로부터 데이터 받기위해 작성

  // time :string =" 00 : 00 . 00 "
  min:number = 0
  sec:number = 0
  ms:number = 0

  timeInterval;

  timeStart(){

    this.timeInterval = setInterval(()=>{
      this.ms++
    },10)
    // clearInterval()

  }

  timeStop(){
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop();
    this.ms = 0;
  }

  constructor() {
    setInterval(()=> {
      this.test++;
    },1000);
    console.log("섹션으로부터 잘 받음"+this.inputData)
  }


  ngOnChanges(changes : SimpleChanges){
    console.log(changes)
    for(let propName in changes){
      if(propName == 'inputData'){
        switch (changes[propName].currentValue) {
          case 'start' :
            this.timeStart()
            break;
          case 'stop' :
            this.timeStop()
            break;
          case 'reset' :
            this.timeReset()
            break;

        }

      }
    }

  }

  ngOnInit() {
  }

}
