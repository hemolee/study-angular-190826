import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  commandText;


  present ="present";
  constructor() { }

  controlTime(command) { // time:number 라고 작성도 가능. string값이어도 들어오긴 함
    console.log("섹션에게 클릭이벤트 잘 전달됨. 파라미터: "+command);
    this.present = command;
  }
  ngOnInit() {
  }

}
