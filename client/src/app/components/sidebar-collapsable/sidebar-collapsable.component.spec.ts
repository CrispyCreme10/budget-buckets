import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCollapsableComponent } from './sidebar-collapsable.component';

describe('SidebarCollapsableComponent', () => {
  let component: SidebarCollapsableComponent;
  let fixture: ComponentFixture<SidebarCollapsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCollapsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
