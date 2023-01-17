import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class CheckBoxComponent implements OnInit  {
@Input() id: string;
@Input() label: string;
@Input() inputFormControlName: string;
protected  value: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  change(event){
  this.value = event.target.checked;
  }

}
