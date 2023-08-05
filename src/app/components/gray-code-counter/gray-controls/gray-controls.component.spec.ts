import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayControlsComponent } from './gray-controls.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GrayControlsComponent', () => {
  let component: GrayControlsComponent;
  let fixture: ComponentFixture<GrayControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [GrayControlsComponent]
    }).compileComponents();


    fixture = TestBed.createComponent(GrayControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
