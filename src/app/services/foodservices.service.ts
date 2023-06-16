import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foods } from '../models/foods';
@Injectable({
  providedIn: 'root'
})
export class FoodservicesService {
  BaseUrl='assets/Data/food.json'
  constructor(private http:HttpClient) { }

  ngOnInit():void{}
  getfoods():Observable<Foods[]>{
    return this.http.get<Foods[]>(`${this.BaseUrl}`)
  }
}
