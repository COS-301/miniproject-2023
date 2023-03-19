import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePhotoPage } from './edit-profile-photo.page';

describe('EditProfilePhotoPage', () => {
  let component: EditProfilePhotoPage;
  let fixture: ComponentFixture<EditProfilePhotoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfilePhotoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfilePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
