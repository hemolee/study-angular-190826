import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HelloComponent} from "../hello/hello.component";
import {SectionComponent} from "./section.component";
import {TimeDisplayComponent} from "./stopwatch/time-display/time-display.component";
import {ButtonsComponent} from "./stopwatch/buttons/buttons.component";
import {StopwatchModule} from "./stopwatch/stopwatch.module";
import {RouterModule} from "@angular/router";
import { ClockComponent } from './clock/clock.component';
import {StopwatchComponent} from "./stopwatch/stopwatch.component";

const routes : Routes =[
  {
    path: 'stopwatch',
    component: StopwatchComponent

  },
  {
    path: 'clock',
    component: ClockComponent
  }
]


@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,

  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule .forChild(routes) //forchild이용해서 route부여=route모듈에 등록
  ],
  exports: [
    SectionComponent,
    RouterModule  //export를 해줘야 imports에서 설정한 routes값을 알수가 있다
  ]
})
export class SectionModule { }
