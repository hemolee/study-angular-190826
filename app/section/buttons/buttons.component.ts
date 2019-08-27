import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Output() clickEvent = new EventEmitter(); //EventEmitter<string>() 이렇게 파라미터 타입지정가능.


  constructor() { }

 start(){
    this.clickEvent.emit(10); //부모컴포넌트(section)에게 클릭이벤트 + 파라미터 10 전달
   // section의 app-buttons태그의 클릭이벤트가 실행된다 + $event로 파라미터받을 수 있음
 }
  ngOnInit() {
  }

}
