import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StoreService } from './store.service';
import { LoginMsg } from '../interface/LoginMsg';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForloginService {
  url:string = `http://localhost:8888/user`
  constructor(
    private http : HttpClient ,
    private store : StoreService,
    private router : Router
  ) { }

  LogonIn(des:string,UserName:string,PassWord:string){
    this.http.get(
      this.url,{params:new HttpParams().set('UserName',UserName).set('PassWord',PassWord).set('pose',des)}
    ).subscribe((res)=>{
      res[0] == 'LF' && (this.store.LoginCoverBl = true) && (this.store.LoginCoverMsg = '用户名不存在')
      res[0] == 'RF' && (this.store.LoginCoverBl = true) && (this.store.LoginCoverMsg = '用户名已被占用')
      res[0] == 'PW' && (this.store.LoginCoverBl = true) && (this.store.LoginCoverMsg = '用户名/密码错误')
      res[0] == 'LS' && (this.store.LoginCoverBl = true) && (this.store.LoginCoverMsg = '登录成功，三秒后跳转') && this.success(res[1])
      res[0] == 'RS' && (this.store.LoginCoverBl = true) && (this.store.LoginCoverMsg = '注册成功，三秒后跳转') && this.success(res[1])
    })
  }
  success(data:LoginMsg){
    this.store.LoginState = false
    this.store.LoginData = data
    sessionStorage.setItem('LoginData',JSON.stringify(data))
    setTimeout(() => {
      history.go(-1)
    }, 2000);
  }

}


