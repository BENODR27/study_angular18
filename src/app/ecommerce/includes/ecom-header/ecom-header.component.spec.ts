import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomHeaderComponent } from './ecom-header.component';

describe('EcomHeaderComponent', () => {
  let component: EcomHeaderComponent;
  let fixture: ComponentFixture<EcomHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcomHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
