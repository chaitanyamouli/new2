import { Component } from '@angular/core';
import { FoodservicesService } from '../services/foodservices.service';
import { Foods } from '../models/foods';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component {
  public foods!:Foods[];
  constructor(private service:FoodservicesService){}

  ngOnInit(){
    this.service.getfoods().subscribe(data => this.foods=data);

  }

}
