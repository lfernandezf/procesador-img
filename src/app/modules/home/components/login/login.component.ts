import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarLogin } from 'src/app/store/login/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  cargando: boolean;
  subscription;
  hide = true;

  constructor(private router: Router, private formBuilder: FormBuilder, public store: Store<AppState>) {
    this.createFormLogin();
  }


  /**
   * 
   */
  createFormLogin() {
    this.loginForm = this.formBuilder.group(
      {
        username: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]]
      }
    )
  }



  ngOnInit() { }



  validateAccess() {
    this.store.dispatch(new CargarLogin(this.loginForm.value));
    this.store.select('login').subscribe(login => {
      if (login.data != null) {
        console.log(login.data);
          this.router.navigate(['procesor']);
      }
    });
  }

}
