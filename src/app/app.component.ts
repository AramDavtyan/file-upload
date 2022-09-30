import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent{
  title = 'dropzone';
  files: File[] = [];
  allowedTypes = 'text/plain';
  allowedSize = 1000000;
  constructor() { }

  onChange(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    for (let i = 0; i < this.files.length; i++) {
      formData.append("file[]", this.files[i]);
    }
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
