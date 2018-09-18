import { Component, OnInit } from '@angular/core';
import { StaticdataService } from '../../service/staticdata.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor(
    private staticData : StaticdataService
  ) { }

  ngOnInit() {
  }

}
