import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeTopComponent} from './components/HomeTop/HomeTop.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeServerComponent } from './components/home-server/home-server.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { RoutingModule } from 'src/app/module/routing.module';
import { RequestdataService } from './service/requestdata.service';
import { StaticdataService } from './service/staticdata.service';
import { StoreService } from './service/store.service';
import { HttpClientModule } from '@angular/common/http';
import { GetHomedataService } from './service/get-homedata.service';
import { GetGoodsService } from './service/get-goods.service';
import { ForloginService } from './service/forlogin.service';
import { CoverComponent } from './components/cover/cover.component';
import { GuardUserService } from './service/guard-user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeTopComponent,
    HomeHeaderComponent, 
    HomeServerComponent, 
    HomeFooterComponent, 
    CoverComponent,
     
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    RequestdataService,
    StaticdataService,
    StoreService,
    GetHomedataService,
    GetGoodsService,
    ForloginService,
    GuardUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
