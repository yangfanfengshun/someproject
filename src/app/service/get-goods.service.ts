import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Goods } from '../interface/GetGoods';

@Injectable({
  providedIn: 'root'
})
export class GetGoodsService {
  List:Goods[]
  constructor(
    private http : HttpClient
  ) { }
  send(url:string,count:string,page?:string){
    this.http.get(url,{params:new HttpParams().set('count',count).set('page',page)})
    .subscribe((data:Goods[])=>{
      this.List = data
    })
  }

}
