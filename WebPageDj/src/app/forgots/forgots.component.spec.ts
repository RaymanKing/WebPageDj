import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotsComponent } from './forgots.component';

describe('ForgotsComponent', () => {
  let component: ForgotsComponent;
  let fixture: ComponentFixture<ForgotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
