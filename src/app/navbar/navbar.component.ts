import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public logo='mouli';
  public image="../assets/images/logo.png"
  constructor(private routes:Router){}

  ngOnInit(){

  }
  onclick()
  {
        this.routes.navigateByUrl('card')
  }
}
