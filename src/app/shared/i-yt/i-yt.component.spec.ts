import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IYtComponent } from './i-yt.component';

describe('IYtComponent', () => {
  let component: IYtComponent;
  let fixture: ComponentFixture<IYtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IYtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
