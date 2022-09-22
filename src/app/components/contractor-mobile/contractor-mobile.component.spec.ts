import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorMobileComponent } from './contractor-mobile.component';

describe('ContractorMobileComponent', () => {
  let component: ContractorMobileComponent;
  let fixture: ComponentFixture<ContractorMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
