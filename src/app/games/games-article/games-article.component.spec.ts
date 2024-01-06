import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesArticleComponent } from './games-article.component';

describe('GamesArticleComponent', () => {
  let component: GamesArticleComponent;
  let fixture: ComponentFixture<GamesArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
