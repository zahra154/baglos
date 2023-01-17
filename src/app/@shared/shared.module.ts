import { NgModule } from "@angular/core";
import {CommonModule, DecimalPipe} from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MatrialModule } from "./ui-kit/material/matrial.module";
import {FooterComponent} from "@shared/components/footer/footer.component";
import {HeaderComponent} from "@shared/components/header/header.component";
import {MainLayoutComponent} from "@shared/components/main-layout/main-layout.component";
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { InputComponent } from './components/input/input.component';
import { RatingComponent } from './components/rating/rating.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainLayoutComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    InputComponent,
    RatingComponent,
    FileUploaderComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatrialModule,
    HttpClientModule,

  ],
    exports: [
        MainLayoutComponent,
        RadioButtonComponent,
        FooterComponent,
        InputComponent,
        CheckBoxComponent,
        RatingComponent,
        FileUploaderComponent
    ],
  providers:[
    DecimalPipe
  ]

})

export class SharedModule {
}
