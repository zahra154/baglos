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
  public formSubmitted : boolean = false;

  constructor(private fb: FormBuilder,) {
  }

  ngOnInit(): void {
    this.createForm();
  }


  private createForm(): void {
    this.form = this.fb.group({
      name: [null  ,Validators.required],
      email: [null , [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null , Validators.required ],
      confirmPassword: [null , Validators.required],
      gender: [null ],
      image: [null ,],
      rememberMe: [false ]
    });

  }
  get f(){
    return this.form.controls;
  }


  confirm(){
    if(!this.form.valid){
      return;
    } else {
      this.formSubmitted = true;
      //send api to signup
    }

  }


}
