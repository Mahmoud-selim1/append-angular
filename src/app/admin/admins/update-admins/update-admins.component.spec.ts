import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminsComponent } from './update-admins.component';

describe('UpdateAdminsComponent', () => {
  let component: UpdateAdminsComponent;
  let fixture: ComponentFixture<UpdateAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAdminsComponent]
    });
    fixture = TestBed.createComponent(UpdateAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
