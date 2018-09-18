import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-shopcar',
  templateUrl: './shopcar.component.html',
  styleUrls: ['./shopcar.component.css']
})
export class ShopcarComponent implements OnInit {
 
  constructor(
    private store : StoreService
  ) { }

  ngOnInit() {}
  
  changeData(des:string,ev,index?:number){
    let ShopCarData = JSON.parse(JSON.stringify(this.store.ShopCarData))
    let TotalCount:number = 0
    let TotalPrice:number = 0
    des == 'plus' && ShopCarData[index].count ++
    des == 'minus' && (ShopCarData[index].count > 1 ? ShopCarData[index].count-- : ShopCarData[index].count = 1)
    des == 'blur' && (Number(ev.target.value) ? 
    (Number(ev.target.value) > 1 ? ShopCarData[index].count = Number(ev.target.value) : ShopCarData[index].count = 1 ) : ShopCarData[index].count = 1 )
    des == 'select' && (ShopCarData[index].view = ev.target.checked)
    des == 'del' && (ShopCarData.splice(index,1))
    des == 'allselect' && (ShopCarData.map((item)=>{item.view = ev.target.checked }))
    
    let onoff:boolean = true
    ShopCarData.map((item)=>{
      item.view && (TotalCount += item.count ) && (TotalPrice += item.count * item.price1)
      item.view == false && (onoff = false)
    })

    this.store.AllSelect = onoff
    this.store.ShopCarData = JSON.parse(JSON.stringify(ShopCarData))
    this.store.TotalCount = TotalCount
    this.store.TotalPrice = TotalPrice

  }

}
