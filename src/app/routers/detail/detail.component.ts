import { Component, OnInit, Input } from '@angular/core';
import { Goods } from '../../interface/GetGoods';
import { StoreService } from '../../service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  CoverBl:boolean = false
  count:number = 1
  constructor(
    private store : StoreService,
    private router : Router
  ) { }

  ngOnInit() {
    
  }

  changeCount(des:string,ev){
    
    des == 'plus' && (this.count += 1);
    des == 'minus' && (this.count > 1 ? (this.count -= 1) : this.count = 1) 
    des == 'blur' && (Number(ev.target.value) ? ((parseInt(ev.target.value) > 0 ? (this.count = parseInt(ev.target.value)) : this.count = 1)) : this.count = 1 )               
  }
  addShopCar(){
    if(this.store.LoginState)
      {let data = JSON.parse(JSON.stringify(this.store.DetailData))
      let ShopCarData = this.store.ShopCarData
      let onoff = true
      data.count = this.count
      data.view = false
      if(ShopCarData.length){
        ShopCarData.map((item)=>{
          item._id == data._id && (item.count += data.count) && (onoff = false)
        })
        onoff && this.store.ShopCarData.push(data)
      }else{
        this.store.ShopCarData.push(data)
      }
    }else{
      this.store.GuardCover = true
    }
  }

}
