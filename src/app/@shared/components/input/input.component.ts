import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from "@angular/forms";
import {InputTextTypeEnum} from "@shared/enums/input-text-type.enum";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputComponent implements OnInit  , OnChanges{

  @Output() inputValueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() parentForm?: FormGroup;
  @Input() type = InputTextTypeEnum.text;
  @Input() icon = '';
  @Input() label: string = '';
  @Input() inputFormControlName: string = '';
  @Input() placeholder: string = '';
  @Input() alert: boolean = false;
  @Input() numberOnly: boolean = false;
  @Input() maxLength: number = 100;
  @Input() currentValue;
  @Input() readOnly: boolean = false;

  disabled: boolean = false;
  passwordFlag: boolean = false;
  inputType = InputTextTypeEnum ;
  value: string = '';

  constructor() { }

  ngOnInit(): void {
    if(this.type === this.inputType.password){
      this.passwordFlag = true;
    }
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes?.['currentValue']) {
        this.value = changes?.['currentValue']?.currentValue;
        this.parentForm.controls[this.inputFormControlName].setValue(this.value);
    }


  }

  onChangeInput(event) {
    this.value = event.target.value;
    this.parentForm.controls[this.inputFormControlName].setValue( this.value);
  }

  changeType(){
    if(this.type === this.inputType.text) {
      this.type = this.inputType.password
    }
    else if(this.type === this.inputType.password){
      this.type = this.inputType.text
    }

  }


}
