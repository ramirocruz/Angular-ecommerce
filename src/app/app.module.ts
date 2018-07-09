import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from'./auth.guard';

import { AppComponent } from './app.component';
import { MainComponent} from './main/main.component';
import { CartComponent} from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookComponent } from './book/book.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [

  {
    path: 'main',
    component: MainComponent,
  },
  {
        path: 'cart',
        component:CartComponent,

  },
  {
    path:'auth',
    component:AuthComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'addbook',
    component:AddbookComponent
  },
  {
    path:'wishlist',
    component:WishlistComponent
  },
  {
    path:'book',
    component:BookComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
  ];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent,
    AuthComponent,
    RegisterComponent,
    AddbookComponent,
    BookComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
