import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { ContactComponent } from '../Components/contact/contact.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo:'home', pathMatch: 'full' }
];
