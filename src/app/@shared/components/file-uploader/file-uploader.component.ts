import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class FileUploaderComponent implements OnInit {
  @Input() inputFormControlName: string = '';
  @Input() parentForm: FormGroup;
  @Input() maxSize: number;
  fileLabel: string = 'Upload File';
  file: File;
  errorMsg: string = '' ;

  constructor() { }

  ngOnInit(): void {
  }


  changeFile(event) {
    this.file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    const size = event.target.files[0]? event.target.files[0].size: 0;

    if(size > (this.maxSize * 1024)) {
      this.errorMsg = 'this file is bigger than 3Mb';
      this.file= null;
      return;
    } else {
      this.fileLabel = event.target.files[0]? event.target.files[0].name: 'Upload File';
    }

    const pattern = /image-*/;
    const reader = new FileReader();
    if (!this.file?.type.match(pattern)) {
       this.errorMsg = 'this file format does not supported';
      this.file= null;
      return;
    }
    this.errorMsg ='';
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(this.file);

  }

  get f(){
    console.log(this.parentForm.controls[this.inputFormControlName])
    return  this.parentForm.controls[this.inputFormControlName]
  }

  handleReaderLoaded(e) {
    let reader = e.target;
    this.parentForm.controls[this.inputFormControlName].setValue(reader.result)

  }

  removeFile(){
    this.file = null;
    this.parentForm.controls[this.inputFormControlName].setValue(null);
    this.fileLabel = 'Upload File';
  }


}
