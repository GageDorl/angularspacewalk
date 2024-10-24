import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { AboutComponent } from '../Components/about/about.component';
import { ShopComponent } from '../Components/shop/shop.component';
import { ShopItemComponent } from '../Components/shop-item/shop-item.component';
import { AddComponent } from '../Components/add/add.component';
import { EditComponent } from '../Components/edit/edit.component';

export const routes: Routes = [
    { path: 'add', component: AddComponent},
    { path: 'about', component: AboutComponent },
    { path: 'shop/edit/:id', component: EditComponent},
    { path: 'shop/:id', component: ShopItemComponent},
    { path: 'shop', component: ShopComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo:'home', pathMatch: 'full' }
];
