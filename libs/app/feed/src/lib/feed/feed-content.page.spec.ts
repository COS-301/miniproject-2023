import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedContentPage } from './feed-content.page';

describe('FeedContentPage', () => {
  let component: FeedContentPage;
  let fixture: ComponentFixture<FeedContentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedContentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
