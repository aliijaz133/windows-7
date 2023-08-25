import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisPcHomeComponent } from './this-pc-home.component';

describe('ThisPcHomeComponent', () => {
  let component: ThisPcHomeComponent;
  let fixture: ComponentFixture<ThisPcHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThisPcHomeComponent]
    });
    fixture = TestBed.createComponent(ThisPcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
