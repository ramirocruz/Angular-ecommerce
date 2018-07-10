import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from'./auth.guard';
import { LoginGuard } from './login.guard';
import {AuthService} from './auth.service';
import {DataService} from './data.service';
import { AppComponent } from './app.component';
import { MainComponent} from './main/main.component';
import { CartComponent} from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookComponent } from './book/book.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [

  {
    path: 'main',
    component: MainComponent,
  },
  {
        path: 'cart',
        component:CartComponent,
        canActivate:[AuthGuard]

  },
  {
    path:'auth',
    component:AuthComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'addbook',
    component:AddbookComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'wishlist',
    component:WishlistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'details/:id',
    component:BookComponent
  },
  {
    path:'message',
    component:MessageComponent,
    canActivate:[AuthGuard]
  }
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
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGuard,AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
