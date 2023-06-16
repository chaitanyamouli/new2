import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private routes: Router){
    

  }
  ngOnInit(){

  }
    Images = [
      {
        image:'../assets/images/medical coder.jpg',
        alt:'mouli',
        title:'Medical coder',
        desc:'',
        button:'Register'
      },
      {
        image:'../assets/images/clinical sas.jpg',
        alt:'mouli',
        title:'Clinical Sas',
        desc:'',
        button:'Register'
      },
      {
        image:'../assets/images/vigilance.jpg',
        alt:'mouli',
        title:'Vigilance',
        desc:'',
        button:'Register'
      },
      
      {
        image:'../assets/images/java.jpg',
        alt:'mouli',
        title:'Java ',
        desc:'',
        button:'Register'
      }
      

      
    ]
    onclick(){this.routes.navigateByUrl('login')

    }
}
