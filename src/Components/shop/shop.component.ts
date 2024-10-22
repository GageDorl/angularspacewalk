import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  items=[
    {
      id:1, 
      title: "Calm by Spacewalk",
      image:'calm.png',
      price:'$5'
    },
    {
      id:2, 
      title: "Another One by Spacewalk",
      image:'calm.png',
      price:'$5'
    },
  ];

  constructor(private router: Router){}

  goToItem(id: number){
    this.router.navigate(['/shop',id])
  }
}
