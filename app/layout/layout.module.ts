import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {SectionComponent} from "../section/section.component";




@NgModule({
  declarations: [
    TestComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TestComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
