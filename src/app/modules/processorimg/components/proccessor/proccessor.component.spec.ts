import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Route, Router } from '@angular/router';
import { TestStore } from 'src/app/mocks/teststore';
import { AppState } from 'src/app/store/app.reducer';
import { Location } from '@angular/common';
import { ProccessorComponent } from './proccessor.component';
import { LoginComponent } from 'src/app/modules/home/components/login/login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ProccessorComponent', () => {
  let component: ProccessorComponent;
  let fixture: ComponentFixture<ProccessorComponent>;
  let store: TestStore<AppState>;
  let router: Route;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProccessorComponent, LoginComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginComponent }
        ])
      ],
      providers: [
        {
        provide: Store,
        useClass: TestStore        
      }
    ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: TestStore<AppState>) => {
    store = testStore;
    store.setState({ data: [] });
    fixture = TestBed.createComponent(ProccessorComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  }));

  it('should create', () => {
    store.setState({ login: { authorized: true} });
    expect(component).toBeTruthy();
  });
});
