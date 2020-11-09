import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMagicalMock } from 'angular-testing-library/src/service_mock';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { TestStore } from './mocks/teststore';
import { LoginComponent } from './modules/home/components/login/login.component';
import { LoginService } from './services/login/login.service';
import { AppState } from './store/app.reducer';
import { LoginEffects } from './store/login/effects/login.effects';
import { CargarLogout } from './store/login/actions/logout.actions';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: TestStore<AppState>;
  let effects: LoginEffects;
  let actions: Observable<any>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginComponent }
        ])
      ],
      declarations: [
        AppComponent,
        LoginComponent
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
    }).compileComponents();
    actions = TestBed.inject(Actions);
    effects = TestBed.inject(LoginEffects);
  }));

  beforeEach(inject([Store], (testStore: TestStore<AppState>) => {
    store = testStore;
    store.setState({ data: [] });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();
  }));
  it('should create', () => {
    store.setState({ login: { authorized: true } });
    expect(component).toBeTruthy();
  });
  
  it('Deberia disparar la accion CargarLogout  in el closeRouter', () => {
    store.setState({ logout: { data: { success: true }} });
    fixture.detectChanges();
    let data = {
      "nit": "1236456789"
    }
    const action = new CargarLogout(data);
    actions = of(action);
    const StoreR = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    StoreR.dispatch();
    component.closeRouter();
    expect(spy).toHaveBeenCalled();
    expect(effects).toBeTruthy();
 });
});
