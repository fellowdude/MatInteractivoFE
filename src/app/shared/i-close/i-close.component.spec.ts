import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICloseComponent } from './i-close.component';

describe('ICloseComponent', () => {
  let component: ICloseComponent;
  let fixture: ComponentFixture<ICloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
