import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevModel } from '../Models/dev-model';


@Injectable({
  providedIn: 'root'
})
export class ShareDevsService {

  constructor(private http: HttpClient) { }

  getDev ():Observable<DevModel> {
    return this.http.get<DevModel>(`https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json`)
  }
}
