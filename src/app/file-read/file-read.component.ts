import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CsvUploadService } from '../csv-upload.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-file-read',
  templateUrl: './file-read.component.html',
  styleUrls: ['./file-read.component.css']
})
export class FileReadComponent implements OnInit {

  files: any[] = [];

  message: string | any;
  notification:string;

  selectedFile:File=null;
  SERVER_URL: string = 'http://localhost:4000';
  constructor(private webSocketService:WebsocketService,private csvUploadService:CsvUploadService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.webSocketService.listen('test').subscribe((data)=>{
      console.log("here")
      console.log(data);
    })
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
    console.log(event)
    //this.prepareFilesList(event.target.files);
    //this.prepareFilesList(event.target.files[0]);
    this.selectedFile=<File>event.target.files[0];
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

    // if (this.files != null) {
    //   const formData = new FormData();
    //   formData.append('uploadcsv', this.files[0], this.files[0].name);
    //   this.csvUploadService.upload(formData).subscribe(
    //     rsp => {
    //       if (rsp) {
    //         this.message = 'File uploaded successfully';
    //       }
    //     },
    //     error => {
    //       alert(error.error.data);
    //     });
    // }
    const fd= new FormData();
    fd.append('csvFile',this.selectedFile,this.selectedFile.name)
    console.log(fd)
    this.httpClient.post(`${this.SERVER_URL}/vehicle/csvFile`,fd).subscribe(res=>{
      console.log(res);
      this.message='File Uploaded Successfully';
      console.log(this.message);


      // this.webSocketService.listen('test').subscribe((data)=>{
      //   console.log("here")
      //   console.log(data);
      // })

    })
  }

  notificationSend(){
    console.log("Hello from notification");
      // this.webSocketService.listen('test').subscribe((data)=>{
      //   console.log("here")
      //   console.log(data);
      // })
     this.webSocketService.emit("Hello","Im notification");
  }

  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      return;
    }
    this.files.splice(index, 1);
  }


//   afuConfig = {
//     uploadAPI: {
//       url:"https://example-file-upload-api"
//     }
// };


formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const dm = decimals <= 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
}
