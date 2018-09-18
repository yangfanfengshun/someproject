import { Component, OnInit } from '@angular/core';
import { GetHomedataService } from '../../service/get-homedata.service';

@Component({
  selector: 'HomeShowComponent',
  templateUrl: './home-show.component.html',
  styleUrls: ['./home-show.component.css']
})
export class HomeShowComponent{

  constructor(
    private data : GetHomedataService
  ) { }

  ngOnInit() {
  }

}
