import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardService implements CanLoad {

  constructor(private router: Router) { }
  
  canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    if (sessionStorage.getItem("user") == null) {
      return true;
    } else {
      this.router.navigateByUrl("/home");
      return false;
    }
  }
}
