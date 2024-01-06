import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGameNewComponent } from './home-game-new.component';

describe('HomeGameNewComponent', () => {
  let component: HomeGameNewComponent;
  let fixture: ComponentFixture<HomeGameNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGameNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGameNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
