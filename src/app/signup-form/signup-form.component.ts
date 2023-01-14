import {Component, OnInit} from '@angular/core';

import {InputTextTypeEnum} from "@shared/enums/input-text-type.enum";
import {FormBuilder, FormGroup} from "@angular/forms";
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
      name: [],
      lastName: [],
      gender: [],
      email: [],
      password: [],
      confirmPassword: [],
      rememberMe: []
    });

  }


}
