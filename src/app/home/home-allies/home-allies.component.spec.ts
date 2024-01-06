import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlliesComponent } from './home-allies.component';

describe('HomeAlliesComponent', () => {
  let component: HomeAlliesComponent;
  let fixture: ComponentFixture<HomeAlliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAlliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
