import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PersonalData } from '../models/personaldata.model';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  countries = ['USA', 'Germany', 'Italy', 'France']

  requestTypes = ['Claim', 'Feedback', 'Help Request']
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroupWithBuilderAndModel(formBuilder);
   }

  ngOnInit() {
  }
  // createFormGroup() {
  //   return new FormGroup({
  //     personalData: new FormGroup({
  //       email: new FormControl(),
  //       mobile: new FormControl(),
  //       country: new FormControl()
  //      }),
  //     requestType: new FormControl(),
  //     text: new FormControl()
  //   });
  // }

  // createFormGroupWithBuilder(formBuilder: FormBuilder) {
  //   return formBuilder.group({
  //     personalData: formBuilder.group({
  //       email: 'defaul@email.com',
  //       mobile: '',
  //       country: ''
  //     }),
  //     requestType: '',
  //     text: ''
  //   });
  // }

  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    return formBuilder.group({
      requestType: new FormControl('',[Validators.required]),
      text: new FormControl ('',[Validators.required]),
      email: new FormControl ('',[Validators.email, Validators.required]),
      mobile: new FormControl('',[Validators.required, Validators.minLength(10)]),
      country: new FormControl ('',[Validators.required])
    });
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }
  
  get email() {
    return this.contactForm.get('email');
  }
  onSubmit() {
    if(this.contactForm.valid)
    {
      // Make sure to create a deep copy of the form-model
      const result: Contact = Object.assign({}, this.contactForm.value);
      // Do useful stuff with the gathered data
      console.log(result);
    }
    else{
      alert('Invalid Form');
    }
   
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({ personalData: new PersonalData(), requestType: '', text: '' });
  }
}
