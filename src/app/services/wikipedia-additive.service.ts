import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaAdditiveService {

  constructor(
    private _http:HttpClient,
  ) { }

  getAll():Observable<any[]>{
    return this._http.get<any[]>('https://fr.wikipedia.org/api/rest_v1/page/summary/e')
  }

}
