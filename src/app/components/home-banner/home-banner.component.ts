import { Component, OnInit } from '@angular/core';
import { StaticdataService } from '../../service/staticdata.service';

@Component({
  selector: 'HomeBannerComponent',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent{

  banner: Swiper;
  slides = [
    '../../assets/images/banner/banner1.jpg',
    '../../assets/images/banner/banner2.jpg',
    '../../assets/images/banner/banner3.jpg',
    '../../assets/images/banner/banner4.jpg',
    '../../assets/images/banner/banner5.jpg',
    '../../assets/images/banner/banner6.jpg',
    '../../assets/images/banner/banner7.jpg',
  ];
 
  constructor(
    private staticData : StaticdataService
  ) {}
 
  ngAfterViewInit() {
    this.banner = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      autoplay:{
        delay:2000
      }
    });
  }
}
