import { Component, OnInit } from '@angular/core';
import { StaticdataService } from '../../service/staticdata.service';

@Component({
  selector: 'HomeMainComponent',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent{

  constructor(
    private staticData : StaticdataService
  ) { }

  ngOnInit() {
  }

}
