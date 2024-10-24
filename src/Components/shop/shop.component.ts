import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  constructor(private router: Router){}
  itemsService = inject(ItemsService);
  plugins:any[]=[];
  ngOnInit() {
    this.plugins = this.itemsService.plugins;
  }
  

  goToItem(id: number){
    this.router.navigate(['/shop',id])
  }
}
