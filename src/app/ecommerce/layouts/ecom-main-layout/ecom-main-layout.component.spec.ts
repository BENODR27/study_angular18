import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomMainLayoutComponent } from './ecom-main-layout.component';

describe('EcomMainLayoutComponent', () => {
  let component: EcomMainLayoutComponent;
  let fixture: ComponentFixture<EcomMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcomMainLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
