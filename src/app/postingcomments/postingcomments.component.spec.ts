import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingcommentsComponent } from './postingcomments.component';

describe('PostingcommentsComponent', () => {
  let component: PostingcommentsComponent;
  let fixture: ComponentFixture<PostingcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
