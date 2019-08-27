import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present ="present";
  constructor() { }

  startTime(time) { // time:number 라고 작성도 가능. string값이어도 들어오긴 함
    console.log("섹션에게 클릭이벤트 잘 전달됨. 파라미터: "+time);
    this.present = time;
  }
  ngOnInit() {
  }

}
