import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemoryPage } from './add-memory.page';

describe('AddMemoryPage', () => {
  let component: AddMemoryPage;
  let fixture: ComponentFixture<AddMemoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMemoryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMemoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
