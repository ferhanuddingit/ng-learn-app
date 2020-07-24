import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  myReactiveFrom: FormGroup;
  notAllowedNames: any = ['Ferhan', 'Wajeeh'];
  formStatus: any;

  genders: any = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.myReactiveFrom = new FormGroup({
      userDetails: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.checkUsername.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.checkEmail
        ),
      }),
      course: new FormControl('React'),
      gender: new FormControl(null),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });

    this.myReactiveFrom.statusChanges.subscribe((status) => {
      this.formStatus = status;
    });

    setTimeout(() => {
      // this.myReactiveFrom.setValue({
      //   'userDetails': {
      //     'username': 'Imran',
      //     'email': 'imran@gmail.com'
      //   },
      //   'course': 'Angular',
      //   'gender': 'Male',
      //   'skills': ['Angular']
      // });

      // this.myReactiveFrom.patchValue({
      //   'userDetails': {
      //     'username': 'Imran',
      //     'email': 'imran@gmail.com'
      //   }
      // });

      this.myReactiveFrom.reset({
        userDetails: {
          username: '',
          email: '',
        },
        course: 'Angular',
        gender: '',
        skills: [''],
      });
    }, 2000);
  }

  onSubmit() {
    console.log(this.myReactiveFrom);
  }

  onAddSkill() {
    (<FormArray>this.myReactiveFrom.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  checkUsername(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { nameIsNotAllowed: true };
    }
    return null;
  }

  //Async Validator
  checkEmail(control: FormControl): Promise<any> | Observable<any> {
    const myRes = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'ferhanuddin@gmail.com') {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return myRes;
  }

  getControls() {
    return (this.myReactiveFrom.get('skills') as FormArray).controls;
  }
}
