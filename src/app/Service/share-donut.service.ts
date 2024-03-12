import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel } from '../Models/donut-model';

@Injectable({
  providedIn: 'root'
})
export class ShareDonutService {

  constructor(private http: HttpClient) { }

  getDonut():Observable<DonutModel> {
    return this.http.get<DonutModel>(`https://grandcircusco.github.io/demo-apis/donuts.json`)
  }
  }

