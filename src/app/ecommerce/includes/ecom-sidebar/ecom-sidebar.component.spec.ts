import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomSidebarComponent } from './ecom-sidebar.component';

describe('EcomSidebarComponent', () => {
  let component: EcomSidebarComponent;
  let fixture: ComponentFixture<EcomSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcomSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
