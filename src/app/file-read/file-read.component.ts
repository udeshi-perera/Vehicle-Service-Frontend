import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-read',
  templateUrl: './file-read.component.html',
  styleUrls: ['./file-read.component.css']
})
export class FileReadComponent implements OnInit {

  files: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    //this.fileUpload.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }


  public onFileChanged(event: any) {
    this.prepareFilesList(event.target.files);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  submit(): void {

  }


//   afuConfig = {
//     uploadAPI: {
//       url:"https://example-file-upload-api"
//     }
// };
}
