import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyControlsComponent } from './grey-controls.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GreyControlsComponent', () => {
  let component: GreyControlsComponent;
  let fixture: ComponentFixture<GreyControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [GreyControlsComponent]
    }).compileComponents();


    fixture = TestBed.createComponent(GreyControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
