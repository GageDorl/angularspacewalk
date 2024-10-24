import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  itemsService = inject(ItemsService);
  constructor(private router: Router){}

  goToItem(id: number){
    this.router.navigate(['/shop',id])
  }
}
