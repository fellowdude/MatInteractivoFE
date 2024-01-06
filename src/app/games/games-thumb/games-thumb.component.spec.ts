import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesThumbComponent } from './games-thumb.component';

describe('GamesThumbComponent', () => {
  let component: GamesThumbComponent;
  let fixture: ComponentFixture<GamesThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
