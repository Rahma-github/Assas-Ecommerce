import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsOperatorComponent } from './obs-operator.component';

describe('ObsOperatorComponent', () => {
  let component: ObsOperatorComponent;
  let fixture: ComponentFixture<ObsOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
