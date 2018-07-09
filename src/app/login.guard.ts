import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedin){
      this.router.navigate(['register']);
      return false;
    }else{
      return this.auth.getloginstatus().pipe(map(
        result => {
          if(!result)
          return true;
          else{
            this.router.navigate(['register']);
               return false;
          }
        }
      ))
    }
  }
}
