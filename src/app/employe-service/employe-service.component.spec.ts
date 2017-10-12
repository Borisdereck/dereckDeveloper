import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeServiceComponent } from './employe-service.component';

describe('EmployeServiceComponent', () => {
  let component: EmployeServiceComponent;
  let fixture: ComponentFixture<EmployeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
