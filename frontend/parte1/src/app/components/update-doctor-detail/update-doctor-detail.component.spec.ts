import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoctorDetailComponent } from './update-doctor-detail.component';

describe('UpdateDoctorDetailComponent', () => {
  let component: UpdateDoctorDetailComponent;
  let fixture: ComponentFixture<UpdateDoctorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDoctorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDoctorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
