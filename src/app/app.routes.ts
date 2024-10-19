import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { AboutComponent } from '../Components/about/about.component';
import { ShopComponent } from '../Components/shop/shop.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo:'home', pathMatch: 'full' }
];
