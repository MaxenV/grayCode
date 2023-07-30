import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyCodeMainComponent } from './grey-code-counter.component';

describe('GreyCodeMainComponent', () => {
  let component: GreyCodeMainComponent;
  let fixture: ComponentFixture<GreyCodeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreyCodeMainComponent]
    });
    fixture = TestBed.createComponent(GreyCodeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
