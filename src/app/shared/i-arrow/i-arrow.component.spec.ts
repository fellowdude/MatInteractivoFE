import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IArrowComponent } from './i-arrow.component';

describe('IArrowComponent', () => {
  let component: IArrowComponent;
  let fixture: ComponentFixture<IArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
