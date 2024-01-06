import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ILikeComponent } from './i-like.component';

describe('ILikeComponent', () => {
  let component: ILikeComponent;
  let fixture: ComponentFixture<ILikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ILikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ILikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
