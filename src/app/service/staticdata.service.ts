import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopRight } from '../interface/TopRight';
import { HeaderSubnavMsg } from '../interface/HeaderSubnavMsg';
import { HeaderNavMsg } from '../interface/HeaderNavMsg';
import { LogoMsg } from '../interface/LogoMsg';
import { SerachTopMsg } from '../interface/SerachTopMsg';
import { ServerMsg } from '../interface/ServerMsg';
import { HomeBannerImgBox } from '../interface/HomeBannerImgBox';
import { HomeBannerMsg } from '../interface/HomeBannerMsg';
import { HomeMainSecondFloor } from '../interface/HomeMainSecondFloor';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {
  TopRight:TopRight
  HeaderUnderSerach:string[]
  HeaderSubnavMsg:HeaderSubnavMsg
  HeaderNavMsg:HeaderNavMsg
  LogoMsg:LogoMsg
  SerachTopMsg:SerachTopMsg
  ServerMsg:ServerMsg
  HomeBannerImgBox:HomeBannerImgBox
  HomeBannerMsg:HomeBannerMsg
  HomeMainFirstFloor:string[]
  HomeMainSecondFloor:HomeMainSecondFloor
  PromotionStaticBanner:Object
  PromotionStaticHotBands:string[]
  constructor(
    private http : HttpClient
  ) { }

  get(url:string){
    return this.http.get(url)
  }

  staticData(url:string){
    this.get(url).subscribe((data)=>{
      for(let index in data){
        data[index].des == 'TopRight' && (this.TopRight = data[index].data)
        data[index].des == 'HeaderUnderSerach' && (this.HeaderUnderSerach = data[index].data)
        data[index].des == 'HeaderSubnavMsg' && (this.HeaderSubnavMsg = data[index].data)
        data[index].des == 'HeaderNavMsg' && (this.HeaderNavMsg = data[index].data)
        data[index].des == 'LogoMsg' && (this.LogoMsg = data[index].data)
        data[index].des == 'ServerMsg' && (this.ServerMsg = data[index].data)
        data[index].des == 'SerachTopMsg' && (this.SerachTopMsg = data[index].data)
        data[index].des == 'HomeBannerMsg' && (this.HomeBannerImgBox = data[index].data.imgBox) &&(this.HomeBannerMsg = data[index].data.msg)
        data[index].des == 'HomeMain' && (this.HomeMainFirstFloor = data[index].data.FirstFloor) &&(this.HomeMainSecondFloor = data[index].data.SecondFloor)
        data[index].des == 'PromotionStatic' && (this.PromotionStaticBanner = data[index].data.banner) &&(this.PromotionStaticHotBands = data[index].data.hotbands)
        
      }
    })
  }
}
