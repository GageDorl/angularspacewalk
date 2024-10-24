import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.css'
})
export class ShopItemComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute){}
  itemsService = inject(ItemsService);
  plugins!:any[];
  item:any={name:'hi'};
  id:number=0;
  ngOnInit() {
    this.plugins = this.itemsService.plugins;
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.item=this.itemsService.getItem(this.id);
    // this.itemsService.item;
  }

  setItem(id: number){
    
    console.log('tried 2')
    for(let item of this.plugins){
      console.log(item)
      if(item.id==id){
        return(item)
      }
    }
  }
  editItem(){
    this.router.navigate(['/edit',this.item.id])
  }
  goToManifesto(){
    window.open("https://www.marxists.org/archive/marx/works/1848/communist-manifesto/",'_blank');
  }
}
