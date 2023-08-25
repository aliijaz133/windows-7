import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDiskDComponent } from './local-disk-d.component';

describe('LocalDiskDComponent', () => {
  let component: LocalDiskDComponent;
  let fixture: ComponentFixture<LocalDiskDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalDiskDComponent]
    });
    fixture = TestBed.createComponent(LocalDiskDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
