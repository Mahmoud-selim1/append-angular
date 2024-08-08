import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBlogComponent } from './static-blog.component';

describe('StaticBlogComponent', () => {
  let component: StaticBlogComponent;
  let fixture: ComponentFixture<StaticBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticBlogComponent]
    });
    fixture = TestBed.createComponent(StaticBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
