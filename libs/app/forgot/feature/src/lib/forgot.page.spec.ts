import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPage } from './forgot.page';

describe('ForgotPage', () => {
  let component: ForgotPage;
  let fixture: ComponentFixture<ForgotPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
