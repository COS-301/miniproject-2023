import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePhotoPageComponent } from './edit-profile-photo.page';

describe('EditProfilePhotoPageComponent', () => {
  let component: EditProfilePhotoPageComponent;
  let fixture: ComponentFixture<EditProfilePhotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfilePhotoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfilePhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
