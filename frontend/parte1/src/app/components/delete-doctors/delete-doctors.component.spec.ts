import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDoctorsComponent } from './delete-doctors.component';

describe('DeleteDoctorsComponent', () => {
  let component: DeleteDoctorsComponent;
  let fixture: ComponentFixture<DeleteDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
