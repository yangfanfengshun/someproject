import { Component } from '@angular/core';
import { StaticdataService } from '../../service/staticdata.service';
import { StoreService } from '../../service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'HomeTopComponent',
  templateUrl: './HomeTop.component.html',
  styleUrls: ['./HomeTop.component.css']
})
export class HomeTopComponent {
    constructor(
      private staticData : StaticdataService,
      private store : StoreService,
      private router : Router
    ){ }
    
    LogonOut(){
      this.store.LoginData = {UserName:'',PassWord:''}
      this.store.LoginState = false
      sessionStorage.removeItem('LoginData')
      this.router.navigate(['/login'])
    }
    changeState(des:string){
      des == 'login' && (this.store.LoginView = true)
      des == 'reg' && (this.store.LoginView = false)
    }

}