import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.css'
})
export class ShopItemComponent {
  item = {
    id:1, 
    title: "calm™",
    author: "spacewalk",
    description: 'calm is a recreation of soothe 2\'s sidechain feature within FL Studio. No extra downloads or installtion required. Simply drag and drop the preset on a mixer channel, send a side chain input, and dial in your desired sound!',
    image:'calm.png',
    price:'$5',
    facts:['works with FL Studio 20.8 and above','no installation necessary', 'dynamically EQ key frequencies of a vocal or other sound out of a competing sound']
  };
  goToManifesto(){
    window.open("https://www.marxists.org/archive/marx/works/1848/communist-manifesto/",'_blank');
  }
}
