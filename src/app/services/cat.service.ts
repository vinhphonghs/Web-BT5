import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFact } from '../models/cat-facts';

@Injectable({
  providedIn: 'root',
})

export class CatService {
  constructor(private http: HttpClient) {}

 getCatFacts(maxlength:number, limit: number): Observable<CatFact[]> {
    let response = this.http.get<CatFact[]>(
      `https://cat-fact.herokuapp.com/facts/random?max_length=${9999}&limit=${limit}`
    );
      return response;
  }
  getCatImages(limit: number): Observable<any> {
    return this.http.get<any>(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    );
  }
}
