import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviveMemoryPage } from './revive-memory.page';

describe('ReviveMemoryPage', () => {
  let component: ReviveMemoryPage;
  let fixture: ComponentFixture<ReviveMemoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviveMemoryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviveMemoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
