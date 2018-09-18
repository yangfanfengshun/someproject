import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from '../components/home-banner/home-banner.component';
import { HomeMainComponent } from '../components/home-main/home-main.component';
import { HomeShowComponent } from '../components/home-show/home-show.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeBannerComponent,
    HomeMainComponent,
    HomeShowComponent
  ],
  exports:[
    HomeBannerComponent,
    HomeMainComponent,
    HomeShowComponent
  ]
})
export class HomeModule { }
