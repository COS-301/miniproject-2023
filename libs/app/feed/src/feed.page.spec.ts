import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPageComponent } from './feed.page';

describe('FeedPageComponent', () => {
  let component: FeedPageComponent;
  let fixture: ComponentFixture<FeedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
