import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBurgerComponent } from './i-burger.component';

describe('IBurgerComponent', () => {
  let component: IBurgerComponent;
  let fixture: ComponentFixture<IBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
