import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtuallistComponent } from './virtuallist.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('VirtuallistComponent', () => {
  let component: VirtuallistComponent;
  let fixture: ComponentFixture<VirtuallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtuallistComponent ], schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtuallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
