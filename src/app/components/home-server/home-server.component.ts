import { Component, OnInit } from '@angular/core';
import { StaticdataService } from '../../service/staticdata.service';

@Component({
  selector: 'HomeServerComponent',
  templateUrl: './home-server.component.html',
  styleUrls: ['./home-server.component.css']
})
export class HomeServerComponent  {

  constructor(
    private staticData : StaticdataService
  ) { }

  ngOnInit() {
  }

}
