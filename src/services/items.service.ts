import { Injectable } from '@angular/core';
import {initializeApp} from '@firebase/app';
import {collection, getDocs, getFirestore, addDoc} from '@firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class ItemsService{
  plugins: any[] = [];
  app:any;
  db:any;
  item:any;

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDa7zcud3VWxQ4REUHJcCcN-e92zFFmtzY",
      authDomain: "sp4cew4lk-b344a.firebaseapp.com",
      projectId: "sp4cew4lk-b344a",
      storageBucket: "sp4cew4lk-b344a.appspot.com",
      messagingSenderId: "710015691635",
      appId: "1:710015691635:web:82defd85c2347ed71a7306"
    };
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    const fetchPlugins = async () => {
      try{
        const querySnapshot = await getDocs(collection(this.db,'plugins'));
        querySnapshot.forEach((doc: any)=>{
          const plugin = doc.data();
          this.plugins.push(plugin);
        })
      } catch (error){
        console.error('Error getting plugins: ', error);
      }
    }
    fetchPlugins();
  }

  getItem(id: number){
    for(let item of this.plugins){
      if(item.id==id){
        return(item)
      }
    }
    return null;
  }
}
