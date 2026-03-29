import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth-guard';

export const routes: Routes = [  
    {path:'',redirectTo:'home', pathMatch:'full'}, 
{path:'home',loadComponent :() => import ('./features/componrnts/home/home.component').then( (c)=> c.HomeComponent),title:'home'},
{path:'login',loadComponent :() => import('./core/components/auth/login/login.component').then( (c)=> c.LoginComponent)},
{path:'productdetails/:id',loadComponent :() => import ('./features/componrnts/productdetails/productdetails.component').then( (c)=> c.ProductdetailsComponent),title:'productdetails'},
{path:'not-found',loadComponent:()=>import('./features/componrnts/not-found/not-found.component').then(c=>c.NotfoundComponent),title:'notfound'},
{path:'forgetpassword',loadComponent :() => import ('./core/components/auth/forgetpassword/forgetpassword.component').then( (c)=> c.ForgetpasswordComponent),title:'forgetpassword'},
{path:'cart',canActivate:[authGuard],loadComponent :() => import('./features/componrnts/cart/cart.component').then( (c)=> c.CartComponent),title:'cart'},
{path:'products',loadComponent :() => import ('./features/componrnts/products/products.component').then( (c)=> c.ProductsComponent),title:'products'},
{path:'categories',loadComponent :() => import ('./features/componrnts/categories/categories.component').then( (c)=> c.CategoriesComponent),title:'categories'},
{path:'brands',loadComponent :() => import('./features/componrnts/brands/brands.component').then( (c)=> c.BrandsComponent),title:'brands'},
{path:'register',loadComponent :() => import('./core/components/auth/register/register.component').then( (C)=> C.RegisterComponent),title:'register'},                             
{path:'**',redirectTo:'not-found',title:'notfound'},
];
