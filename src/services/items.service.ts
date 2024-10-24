import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items = [
    {
      id:64, 
      title: "calm™",
      author: "spacewalk",
      description: 'calm is a recreation of soothe 2\'s sidechain feature within FL Studio. No extra downloads or installtion required. Simply drag and drop the preset on a mixer channel, send a side chain input, and dial in your desired sound!',
      image:'calm.png',
      price:'$5',
      facts:['works with FL Studio 20.8 and above','no installation necessary', 'dynamically EQ key frequencies of a vocal or other sound out of a competing sound']
    },
    {
      id:123, 
      title: "Another One",
      author: "spacewalk",
      description: 'another one made by space walk',
      image:'calm.png',
      price:'$5',
      facts: ['not made yet', 'will be cool', 'super sick']
    },
  ];
  getItems(){
    return this.items;
  }

  getItem(id: number){
    for(let item of this.items){
      if(item.id==id){
        console.log(item)
        return(item)
      }
    }
    console.log(null)
    return null;
  }
  constructor() { }
}
