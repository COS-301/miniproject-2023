import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularDelegate, ModalController } from '@ionic/angular';
import { ProfileViewPageComponent } from './profile-view.page';

describe('ProfileViewPage', () => {
  let component1: ProfileViewPageComponent;
  let fixture: ComponentFixture<ProfileViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileViewPageComponent],
      providers: [ModalController, AngularDelegate],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileViewPageComponent);
    component1 = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component1).toBeTruthy();
  });
});
