import { Routes } from '@angular/router';
import { HomeComponent } from './features/componrnts/home/home.component';
import { CartComponent } from './features/componrnts/cart/cart.component';
import { ProductsComponent } from './features/componrnts/products/products.component';
import { CategoriesComponent } from './features/componrnts/categories/categories.component';
import { BrandsComponent } from './features/componrnts/brands/brands.component';
import { RegisterComponent } from './core/components/auth/register/register.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { authGuard } from './core/guards/auth/auth-guard';

export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full'},
{path:'home',component:HomeComponent,title:'home'},
{path:'login',component:LoginComponent,title:'login'},
{path:'not-found',loadComponent:()=>import('./features/componrnts/not-found/not-found.component').then(c=>c.NotfoundComponent),title:'ss'},

{path:'cart',canActivate:[authGuard],component:CartComponent,title:'cart'},
{path:'products',component:ProductsComponent,title:'products'},
{path:'categories',component:CategoriesComponent,title:'categories'},
{path:'brands',component:BrandsComponent,title:'brands'},
{path:'register',component:RegisterComponent,title:'register'},
{path:'**',redirectTo:'not-found',title:'notfound'},
];
