import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITwComponent } from './i-tw.component';

describe('ITwComponent', () => {
  let component: ITwComponent;
  let fixture: ComponentFixture<ITwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
