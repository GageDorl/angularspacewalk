import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  itemsService = inject(ItemsService);
  plugins:any[]=[];
  ngOnInit() {
    this.plugins = this.itemsService.plugins;
  }
  
  constructor(private router: Router){}

  goToItem(id: number){
    this.router.navigate(['/shop',id])
  }
}
