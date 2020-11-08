import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-proccessor',
  templateUrl: './proccessor.component.html',
  styleUrls: ['./proccessor.component.css']
})
export class ProccessorComponent implements OnInit {

  constructor(public store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select('login').subscribe(login => {
      if(login.authorized === false){
           this.router.navigate(['login']);
      }
   }); 
  }

}
