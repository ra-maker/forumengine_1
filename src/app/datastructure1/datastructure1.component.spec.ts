import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datastructure1Component } from './datastructure1.component';

describe('Datastructure1Component', () => {
  let component: Datastructure1Component;
  let fixture: ComponentFixture<Datastructure1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datastructure1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datastructure1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
