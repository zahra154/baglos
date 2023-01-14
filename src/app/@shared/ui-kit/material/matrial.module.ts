import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatDialogModule,
    MatRadioModule,

  ]
  , exports:[
    CommonModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatDialogModule,
    MatRadioModule,

  ],
  providers:[
    {
      provide: MatDialogRef,
      useValue: {
        close: (dialogResult: any) => {
        }
      }
    }
  ]
})
export class MatrialModule { }
