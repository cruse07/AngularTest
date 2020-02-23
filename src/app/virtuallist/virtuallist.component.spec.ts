import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtuallistComponent } from './virtuallist.component';

describe('VirtuallistComponent', () => {
  let component: VirtuallistComponent;
  let fixture: ComponentFixture<VirtuallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtuallistComponent ]
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
