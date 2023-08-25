import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisPcComponent } from './this-pc.component';

describe('ThisPcComponent', () => {
  let component: ThisPcComponent;
  let fixture: ComponentFixture<ThisPcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThisPcComponent]
    });
    fixture = TestBed.createComponent(ThisPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
