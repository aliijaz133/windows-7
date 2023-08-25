import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDiskCComponent } from './local-disk-c.component';

describe('LocalDiskCComponent', () => {
  let component: LocalDiskCComponent;
  let fixture: ComponentFixture<LocalDiskCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalDiskCComponent]
    });
    fixture = TestBed.createComponent(LocalDiskCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
