import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGameArticleComponent } from './home-game-article.component';

describe('HomeGameArticleComponent', () => {
  let component: HomeGameArticleComponent;
  let fixture: ComponentFixture<HomeGameArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGameArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGameArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
