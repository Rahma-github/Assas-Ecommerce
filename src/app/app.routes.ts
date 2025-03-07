import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ParentPorductComponent } from './Components/parent-porduct/parent-porduct.component';
import { ObsOperatorComponent } from './Components/obs-operator/obs-operator.component';
import { AdminAddPrdComponent } from './Components/admin-add-prd/admin-add-prd.component';
import { CategoryComponent } from './Components/category/category.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { userGuard } from './Gard/user.guard';
import { UserReactiveComponent } from './Components/user-reactive/user-reactive.component';
import { CategoryDetailsComponent } from './Components/category-details/category-details.component';

export const routes: Routes = [

  {path:'',redirectTo:'/Home',pathMatch:'full'},
  // {path:'',component:ProductComponent,title:"Home page"},
  {path:'Home',component:HomeComponent,title:"Home page"},
  {path:'product',component:ParentPorductComponent,title:"Home page"},
  {path:'contact',component:ContactUsComponent,title:"contact us", canActivate:[userGuard]},
  {path:'about',component:AboutComponent,title:"about page"},
  {path:'product/:prdID',component:ProductDetailsComponent,title:"Product details"},

  {path:'obs',component:ObsOperatorComponent,title:"obs -op page"},
  {path:'admin',component:AdminAddPrdComponent,title:"Admin"},
  {path:'category',component:CategoryComponent,title:"categoty"},
  {path:'category/:id',component:CategoryDetailsComponent,title:"categoryDetails"},

  // {path:'userAuthantcation',component:UserAuthComponent,title:"auth"},
  {path:'userLogin',component:UserAuthComponent,title:"auth"},
  {path:'userLogout',component:UserAuthComponent,title:"auth"},
  {path:'userReactiveForm',component:UserReactiveComponent,title:"reactive"},






  {path:'**',component:NotFoundComponent}



];
