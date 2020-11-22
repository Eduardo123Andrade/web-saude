import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponentsComponent } from './switch-components.component';

describe('SwitchComponentsComponent', () => {
  let component: SwitchComponentsComponent;
  let fixture: ComponentFixture<SwitchComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
