import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTechnosComponent } from './form-add-technos.component';

describe('FormAddTechnosComponent', () => {
  let component: FormAddTechnosComponent;
  let fixture: ComponentFixture<FormAddTechnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddTechnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddTechnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
