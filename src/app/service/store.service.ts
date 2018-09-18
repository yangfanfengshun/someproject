import { Injectable } from '@angular/core';
import { LoginMsg } from '../interface/LoginMsg';
import { Goods } from '../interface/GetGoods';
// import { LoginMsg } from '../interface/LoginMsg';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  LoginView:boolean = true
  LoginCoverBl:boolean = false
  LoginCoverMsg:string ='qwe'
  LoginData:LoginMsg
  LoginState:boolean = false

  DetailData:Goods

  ShopCarData:Goods[] = []

  TotalCount:number = 0
  TotalPrice:number = 0
  AllSelect:boolean = false

  GuardCover:boolean = false


}
