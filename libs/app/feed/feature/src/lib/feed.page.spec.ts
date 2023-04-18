import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPage } from './feed.page';

describe('FeedComponent', () => {
  let component: FeedPage;
  let fixture: ComponentFixture<FeedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
