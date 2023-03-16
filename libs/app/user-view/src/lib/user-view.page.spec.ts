import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewPage } from './user-view.page';

describe('UserViewPage', () => {
  let component: UserViewPage;
  let fixture: ComponentFixture<UserViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserViewPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UserViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
