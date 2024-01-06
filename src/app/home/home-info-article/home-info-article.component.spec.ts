import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoArticleComponent } from './home-info-article.component';

describe('HomeInfoArticleComponent', () => {
  let component: HomeInfoArticleComponent;
  let fixture: ComponentFixture<HomeInfoArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInfoArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInfoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
