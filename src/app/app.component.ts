import { Component } from '@angular/core';
import { StaticdataService } from './service/staticdata.service';
import { StoreService } from './service/store.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private toStatic : StaticdataService,
    private store : StoreService,
    private router : Router
  ){
    toStatic.staticData('http://localhost:8888/getstatic')
  }
  
  ngOnInit(){
    sessionStorage.getItem('LoginData') && 
    (this.store.LoginData = JSON.parse(sessionStorage.getItem('LoginData')))
    &&(this.store.LoginState = true)

    this.router.events.subscribe((ev)=>{
      if(ev instanceof NavigationEnd){
        let path=ev.urlAfterRedirects;
        if(/detail/.test(path)){
          (this.store.DetailData == null || this.store.ShopCarData == null)
            && this.router.navigate(['/product'])
        }
        if(/login/.test(path)){
          this.store.LoginState && history.go(-1)
        }
      }
    })
  }

}
