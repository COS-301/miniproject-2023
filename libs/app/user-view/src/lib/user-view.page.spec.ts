import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewPageComponent } from './user-view.page';

describe('UserViewPageComponent', () => {
  let component: UserViewPageComponent;
  let fixture: ComponentFixture<UserViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserViewPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
