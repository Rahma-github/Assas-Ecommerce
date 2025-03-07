import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPorductComponent } from './parent-porduct.component';

describe('ParentPorductComponent', () => {
  let component: ParentPorductComponent;
  let fixture: ComponentFixture<ParentPorductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentPorductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentPorductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
