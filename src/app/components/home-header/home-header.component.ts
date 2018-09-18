import { Component, OnInit } from '@angular/core';
import { StaticdataService } from '../../service/staticdata.service';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'HomeHeaderComponent',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  constructor(
    private staticData : StaticdataService,
    private store : StoreService
  ) { }

  ngOnInit() {
  }

}
