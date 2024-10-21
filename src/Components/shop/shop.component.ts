import { Component } from '@angular/core';

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
}
