import { Component, OnInit } from '@angular/core';
import { GetGoodsService } from '../../service/get-goods.service';
import { Goods } from '../../interface/GetGoods';
import { Router } from '@angular/router';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(
    private data : GetGoodsService,
    private router : Router,
    private store :StoreService
    
  ) { 
    data.send('http://localhost:8888/getgoods','20');
  }

  ToDetail(data:Goods){
    this.router.navigate(['/detail'])
    this.store.DetailData = JSON.parse(JSON.stringify(data))
  }

}
