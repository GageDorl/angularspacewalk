import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.css'
})
export class ShopItemComponent {


  
  constructor(private route: ActivatedRoute) {}
  id!: number;
  itemsService = inject(ItemsService);
  item!:any;
  getItem(id:number){
    this.item = this.itemsService.getItem(id)
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getItem(this.id);
      
    });
  }

  goToManifesto(){
    window.open("https://www.marxists.org/archive/marx/works/1848/communist-manifesto/",'_blank');
  }
}
