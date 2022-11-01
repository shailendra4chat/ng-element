import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatModel } from './cat';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private http: HttpClient) {}

  getCatFact() {
    return this.http.get<CatModel>('https://catfact.ninja/fact');
  }
}
