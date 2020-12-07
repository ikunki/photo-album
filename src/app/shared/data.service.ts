import 'cors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IPhotoAlbumItem } from '../_interface/photo-album.model';

export interface IPhotoAlbumSrv {
  getPhotoAlbumData(route: string): Observable<IPhotoAlbumItem[]>;
}

@Injectable({
  providedIn: 'root'
})
export class DataService implements IPhotoAlbumSrv {
  headers = new HttpHeaders();
 
  constructor(private http: HttpClient) {
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, Accept, Authorization, X-Requested-With, Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, HEAD, OPTIONS');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  public getPhotoAlbumData(route: string): Observable<IPhotoAlbumItem[]> {
    const apiUrl = this.createRoute(route, environment.baseUrl);
    const result = this.http.get<IPhotoAlbumItem[]>(apiUrl, { headers: this.headers })
      .pipe(map((data => data)));
    return result;
  }

  private createRoute = (route: string, envUrl: string) => {
    const result = `${envUrl}/${route}`;
    return result;
  }
}
