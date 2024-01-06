import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFbComponent } from './i-fb.component';

describe('IFbComponent', () => {
  let component: IFbComponent;
  let fixture: ComponentFixture<IFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
