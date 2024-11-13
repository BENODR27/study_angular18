import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionRoleMappingComponent } from './permission-role-mapping.component';

describe('PermissionRoleMappingComponent', () => {
  let component: PermissionRoleMappingComponent;
  let fixture: ComponentFixture<PermissionRoleMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionRoleMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionRoleMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
