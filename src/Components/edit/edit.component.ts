import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {


  
  constructor(private route: ActivatedRoute) {}
  id!: number;
  itemsService = inject(ItemsService);
  item!:any;
  getItem(id:number){
    console.log(id)
    // this.item = this.itemsService.getItem(id)
    console.log(this.item)
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
