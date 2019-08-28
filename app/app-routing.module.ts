import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";


const routes: Routes = [ //해당 url일때 어떤 식으로 동작하게 될 지 json으로 설정해줌
  {
    path : '',
    redirectTo: 'stopwatch', //redirectto는 pathmatch필수적
    pathMatch: 'full'
    //pathMatch: 'prefix' >> 앞에 붙은 주소가 path값일 때 redirect
    //pathMatch: 'full' >> 주소가 정확히 path값일 때만 redirect

    // 주소창 뒤에 붙은 것이 아무것도 없을 때 index로 redirect
  },
  // {
  //   path: 'index',
  //   component: AppComponent
  //   //  ~ /index 일때 appcomponent 보여줌
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//라우터모듈이 루트모듈에 등록이 된다..하나의 파일에서 관리하기위해..
  exports: [RouterModule]
})
export class AppRoutingModule { }
