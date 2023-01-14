import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnlynumberDirective} from "@shared/directives/numeric-textbox";


@NgModule({
  declarations: [
    OnlynumberDirective
  ],
  imports: [
    CommonModule
  ], exports:[
    OnlynumberDirective
  ]
})
export class DirectiveModule { }
