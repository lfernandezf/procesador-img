import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { CargarLogout } from './store/login/actions/logout.actions';
import { ReiciarValores } from './store/login/actions/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver, public store: Store<AppState>, private router: Router) {}

  ngOnInit() {   
    this.store.select('login').subscribe(login => {
      if(login.authorized === true){
           this.showMenu = true;
      }
   }); 
  }
  closeRouter(){
    let data = {
      "nit": "1236456789"
    }
    this.store.dispatch(new CargarLogout(data));
    this.store.dispatch(new ReiciarValores())
    this.store.select('logout').subscribe(logout => {
      if(logout.data != null){
         if(logout.data.success  === true){
           this.showMenu = false;
           this.router.navigate(['login']);
         }
      }
   });
  }
}
