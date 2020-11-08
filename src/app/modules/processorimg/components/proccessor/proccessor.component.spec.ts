import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessorComponent } from './proccessor.component';

describe('ProccessorComponent', () => {
  let component: ProccessorComponent;
  let fixture: ComponentFixture<ProccessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProccessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
