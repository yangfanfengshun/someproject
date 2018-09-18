import { Injectable } from '@angular/core';
import { HomeData } from '../interface/HomeData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetHomedataService {
  homeData:HomeData
  constructor(
    private http:HttpClient
    
    
  ) { }
  send(url:string){
    this.http.get(url).subscribe((data:HomeData)=>{
      this.homeData = data
    })
  }
}
