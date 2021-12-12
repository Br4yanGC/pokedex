import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private http: HttpClient
  ) { }

  uploadPicture(data) {
    return this.http.post<any>('http://localhost:3000/figures', data).toPromise();
  }

  async takePicture(){
    const capturedPhoto = await Camera.getPhoto({
      quality: 100,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64,
      allowEditing: true
    })

    // console.log(capturedPhoto);
    const response = await this.uploadPicture({picture: capturedPhoto.base64String})
    // console.log(response)
    return response;
  }
}
