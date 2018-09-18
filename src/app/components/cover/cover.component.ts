import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'CoverComponent',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor(
    private router : Router ,
    private store : StoreService
  ) { }

  ngOnInit() {
  }
  change(des:boolean){
    this.store.GuardCover = false
    des && this.router.navigate(['/login'])
  }
}
