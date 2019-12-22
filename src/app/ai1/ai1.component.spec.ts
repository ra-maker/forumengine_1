import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ai1Component } from './ai1.component';

describe('Ai1Component', () => {
  let component: Ai1Component;
  let fixture: ComponentFixture<Ai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
