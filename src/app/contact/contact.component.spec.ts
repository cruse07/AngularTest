import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { mergeAlias } from '@angular/flex-layout';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('mobile equals', () => {
  //   fixture = TestBed.createComponent(ContactComponent);
  //   component = fixture.componentInstance;
  //   component.mobile.setValue('pranav@mail.com')
  //   expect(component.contactForm.get(component.mobile.value)).toEqual('pranav@mail.com')
  // });
  it('mobile field validity', () => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    let mobile = component.contactForm.controls['mobile'];
    expect(mobile.valid).toBeFalsy();

    mobile.setValue('9999999999');

    expect(component.contactForm.get('mobile').valid).toBeTruthy();
});
});
