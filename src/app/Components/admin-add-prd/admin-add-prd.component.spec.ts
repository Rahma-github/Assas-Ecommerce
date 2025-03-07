import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPrdComponent } from './admin-add-prd.component';

describe('AdminAddPrdComponent', () => {
  let component: AdminAddPrdComponent;
  let fixture: ComponentFixture<AdminAddPrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddPrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddPrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
