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

  constructor() { }

  ngOnInit(): void {
  }


  changeFile(event) {
    const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    const size = event.target.files[0]? event.target.files[0].size: 0;

    if(size > (this.maxSize * 1024)) {
      // alert('this file is bigger than 3Mb');
      return;
    } else {
      this.fileLabel = event.target.files[0]? event.target.files[0].name: 'Upload File';
    }

    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      // alert('this file format does not supported');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

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
