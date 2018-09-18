import { NgModule } from '@angular/core';
import {RouterModule,Routes, CanActivate} from '@angular/router'

import { HomeComponent } from '../routers/home/home.component';
import { DetailComponent } from '../routers/detail/detail.component';
import { LoginComponent } from '../routers/login/login.component';
import { ProductComponent } from '../routers/product/product.component';
import { PromotionComponent } from '../routers/promotion/promotion.component';
import { ShopcarComponent } from '../routers/shopcar/shopcar.component';
import { UserComponent } from '../routers/user/user.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home.module';
import { FormsModule } from '@angular/forms';
import { GuardUserService } from '../service/guard-user.service';



const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'detail',component:DetailComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'promotion',component:PromotionComponent},
  {path:'shopcar',component:ShopcarComponent,canActivate:[]},
  {path:'user',component:UserComponent,canActivate:[]},
  {path:'',component:HomeComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  declarations:[
    HomeComponent,
    DetailComponent,
    LoginComponent,
    ProductComponent,
    PromotionComponent,
    ShopcarComponent,
    UserComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:false}),
    HomeModule,
    FormsModule,
    
  ],
  exports:[
    RouterModule,HomeModule
  ]
})
export class RoutingModule { }
