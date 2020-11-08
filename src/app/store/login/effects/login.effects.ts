import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import * as loginActions from "../actions/login.actions";
import * as logoutActions from "../actions/logout.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { LoginService } from 'src/app/services/login/login.service';

@Injectable()
export class loginEffects {

    constructor(private actions$ : Actions, public loginService: LoginService){}

    @Effect()
    cargarLogin$ = this.actions$.pipe(
                         ofType( loginActions.CARGAR_LOGIN ),        
                            switchMap( action => {          
                                console.log(action);                      
                               return this.loginService.getLogin(action['data'])
                                              .pipe(                                                  
                                                  map( login =>  new loginActions.CargarLoginSuccess( login )
                                                  ),
                                                  catchError(error => {
                                                    let _error = error;  
                                                    if(error['error'] && error['error']['errors']){                          
                                                        _error = error['error']['errors'][0];
                                                    } 
                                                    return of( new loginActions.CargarLoginFail( _error ));
                                                   })
                                              );
                            })
                        );   

    @Effect()
    cargarLogout =  this.actions$.pipe(
                                ofType( logoutActions.CARGAR_LOGOUT ),        
                                switchMap( action => {                                
                                return this.loginService.getlogout(action['data'])
                                                .pipe(                                                  
                                                    map( logout =>  new logoutActions.CargarLogoutSuccess( logout )
                                                    ),
                                                    catchError(error => {
                                                        let _error = error;  
                                                        if(error['error'] && error['error']['errors']){                          
                                                            _error = error['error']['errors'][0];
                                                        } 
                                                        return of( new logoutActions.CargarLogoutFail( _error ));
                                                    })
                                                );
                                })
                            );


}
