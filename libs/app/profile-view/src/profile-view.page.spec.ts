import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewPage } from './profile-view.page';

describe('ProfileViewPage', () => {
  let component: ProfileViewPage;
  let fixture: ComponentFixture<ProfileViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileViewPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
