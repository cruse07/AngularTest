import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PersonalData } from '../models/personaldata.model';
import { Contact } from '../models/contact.model';
import { DashboardService } from '../services/dashboard.service';
import {map, switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { of, concat, Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [DashboardService]
})
export class ContactComponent implements OnInit {
  countries = ['USA', 'Germany', 'Italy', 'France']
  public data: any = [];
  requestTypes = ['Claim', 'Feedback', 'Help Request']
  contactForm: FormGroup;
searchKey:string;
private searchTerms = new Subject<string>();
countries$: Observable<any>;
  constructor(private formBuilder: FormBuilder, private svcDashboard: DashboardService) {
    this.contactForm = this.createFormGroupWithBuilderAndModel(formBuilder);
    //this.getValue()
    this.SetValue();
  }

  ngOnInit() {
    this.countries$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.svcDashboard.switchCountry(term)),
    );
  
    const ob1 = of (1, 2, 3);
    const ob2= of (4,5,6);
    const mulValues = map ((val: number) => val * 2);
    const mulNums = mulValues (ob1);
    //mulNums.subscribe(x => console.log(x));
    const result = concat(ob1, ob2)
    result.subscribe(console.log);
  }
  SetValue()
  {
    this.svcDashboard.SetValue(true).subscribe(resp => {
      this.data = resp
      console.log(this.data);
    })
  }
  getValue() {
    this.svcDashboard.getValue().subscribe(resp => {
      this.data = resp
      console.log(this.data);
    })
  }

  needsLogin() {
    var isLogin= !this.svcDashboard.isAuthenticated();
    console.log(isLogin);
    return isLogin;
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
      requestType: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
      country: new FormControl('', [Validators.required])
    });
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }

  get email() {
    return this.contactForm.get('email');
  }
  onSubmit() {
    if (this.contactForm.valid) {
      // Make sure to create a deep copy of the form-model
      const result: Contact = Object.assign({}, this.contactForm.value);
      // Do useful stuff with the gathered data
      console.log(result);
    }
    else {
      alert('Invalid Form');
    }

  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({ personalData: new PersonalData(), requestType: '', text: '' });
  }

  getCountryByName(key:string)
  {
    this.svcDashboard.searchCountry(key).subscribe(resp=>{
      console.log(resp);
    })
  }
  searchUsingSwitch(key: string)
  {
    this.searchTerms.next(key)
    // switch to new search observable each time the term changes
    //switchMap((term: string) => this.svcDashboard.searchCountry(term)),
  }
}



