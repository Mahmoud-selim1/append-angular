import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAdminComponent } from './static-admin.component';

describe('StaticAdminComponent', () => {
  let component: StaticAdminComponent;
  let fixture: ComponentFixture<StaticAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticAdminComponent]
    });
    fixture = TestBed.createComponent(StaticAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
