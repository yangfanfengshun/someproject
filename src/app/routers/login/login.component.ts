import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../service/store.service';
import { ForloginService } from '../../service/forlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName:string = ''
  PassWord:string = ''

  constructor(
    private store : StoreService ,
    private send : ForloginService
  ) { }

  ngOnInit() {}

  changeview(des:string){
    des == 'login' && (this.store.LoginView = true)
    des == 'reg' && (this.store.LoginView = false)
  }
  sendMsg(des:string){
    this.UserName && this.PassWord &&
    this.send.LogonIn(des,this.UserName,this.PassWord)
    this.UserName = this.PassWord = ''
  }
  changeCover(bl:boolean){
    this.store.LoginCoverBl = bl
  }

}
