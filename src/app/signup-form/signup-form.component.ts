import {Component, OnInit} from '@angular/core';

import {InputTextTypeEnum} from "@shared/enums/input-text-type.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenderEnum} from "@shared/enums/gender.enum";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public inputTextType = InputTextTypeEnum;
  public form: FormGroup;
  public gender = GenderEnum;

  constructor(private fb: FormBuilder,) {
  }

  ngOnInit(): void {
    this.createForm();
  }


  private createForm(): void {
    this.form = this.fb.group({
      name: [null  ,Validators.required],
      gender: [null ,],
      email: [null , Validators.required],
      password: [null , Validators.required ],
      confirmPassword: [null , Validators.required],
      image: [null ,],
      rememberMe: [false ]
    });

  }
  get f(){
    return this.form.controls;
  }

  confirm(){}


}
