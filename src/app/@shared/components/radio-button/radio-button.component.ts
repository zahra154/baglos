import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class RadioButtonComponent implements OnInit {

  @Input() label: string;
  @Input() id: number;
  @Input() name: string;
  @Input() value: string;
  @Input() inputFormControlName: string;


  constructor() { }

  ngOnInit(): void {
  }


  change(event){
  }

}
