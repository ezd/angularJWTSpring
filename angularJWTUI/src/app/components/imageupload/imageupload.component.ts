import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { fbind } from 'q';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  title = 'imagetest';
  selectedFile: File = null
  myObservable: Observable<any>
  uploadPercentage=0

  constructor(private http: HttpClient, private readonly afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onFileUpload(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  uploadFile() {
    const currenttime = new Date().getTime()
    const directory = 'testapp/testimageupload2/'
    const imageFileName = currenttime + '_' + this.selectedFile.name
    const filePath = directory + imageFileName
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, this.selectedFile);
    // this.uploadProgress = task.percentageChanges();
    // this.downloadURL = fileRef.getDownloadURL()
    task.percentageChanges().subscribe(percent => this.uploadPercentage=Math.trunc(percent))
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            if (url) {
              console.log("it is a url",url);
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
          // console.log("y",url);
        }
      });

  }


}
