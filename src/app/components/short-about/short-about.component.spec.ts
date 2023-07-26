import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortAboutComponent } from './short-about.component';

describe('ShortAboutComponent', () => {
  let component: ShortAboutComponent;
  let fixture: ComponentFixture<ShortAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortAboutComponent]
    });
    fixture = TestBed.createComponent(ShortAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
