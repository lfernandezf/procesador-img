import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { TestStore } from 'src/app/mocks/teststore';
import { AppState } from 'src/app/store/app.reducer';
import { LoginEffects } from 'src/app/store/login/effects/login.effects';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMagicalMock } from 'angular-testing-library/src/service_mock';
import { Actions } from '@ngrx/effects';
import { ProccessorComponent } from 'src/app/modules/processorimg/components/proccessor/proccessor.component';
import { CargarLogin } from 'src/app/store/login/actions/login.actions';
import { of } from 'rxjs/internal/observable/of';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: TestStore<AppState>;
  let effects: LoginEffects;
  let actions: Observable<any>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent , ProccessorComponent],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([
          { path: 'procesor', component: LoginComponent }
        ])
      ],
      providers: [
        {
        provide: Store,
        useClass: TestStore,
        LoginService
      },
        LoginEffects,
      provideMockActions(() => actions),
      provideMagicalMock(LoginService)
      ]
    })
    .compileComponents();
    actions = TestBed.inject(Actions);
    effects = TestBed.inject(LoginEffects);
  })); 

  beforeEach(inject([Store], (testStore: TestStore<AppState>) => {
    store = testStore;
    store.setState({ data: [] });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia disparar la accion CargarLogin  in el validateAccess', () => {
    store.setState({ login: { data: { success: true }} });
    fixture.detectChanges();
    let data = {
      "nit": "1236456789"
    }
    const action = new CargarLogin(data);
    actions = of(action);
    const StoreR = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    StoreR.dispatch();
    component.validateAccess();
    expect(spy).toHaveBeenCalled();
    expect(effects).toBeTruthy();
 });
});
