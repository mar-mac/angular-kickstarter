import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../../models/user.interface';

@Component({
  moduleId: module.id,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isLinear = false;
  public submitted: boolean;

  public accountInfoFormGroup:   FormGroup;
  public profileInfoFormGroup:   FormGroup;
  public mentalityInfoFormGroup: FormGroup;
  public paymentInfoFormGroup:   FormGroup;

  public events: any[] = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountInfoFormGroup = this._formBuilder.group({
      usernameCtrl:         ['', [<any>Validators.required, <any>Validators.minLength(5), <any>Validators.max(12)]],
      emailCtrl:            ['', [<any>Validators.required] ],
      passwordCtrl:         ['', [<any>Validators.required] ],
      confirmPasswordCtrl:  ['', [<any>Validators.required] ]
    });

    this.profileInfoFormGroup = this._formBuilder.group({
      profileTypeCtrl:            ['', [<any>Validators.required] ],
      firstnameCtrl:            ['', [<any>Validators.required] ],
      lastnameCtrl:            ['', [<any>Validators.required] ],
      telephoneCtrl:            ['', [<any>Validators.required] ],
      sexCtrl:            ['', [<any>Validators.required] ],
      dobCtrl:            ['', [<any>Validators.required] ]
    });

    this.mentalityInfoFormGroup = this._formBuilder.group({
      // usernameCtrl: ['', Validators.required]
    });

    this.paymentInfoFormGroup = this._formBuilder.group({
      paypalEmailCtrl: ['', Validators.required]
    });
  }

  onAccountFormSubmit(): void {
    console.log('Username: ' + this.accountInfoFormGroup.get('usernameCtrl').value +
                ', Email: ' + this.accountInfoFormGroup.get('emailCtrl').value );
  }

  save(model: User, isValid: boolean) {
    this.submitted = true;

    console.log(model, isValid);
  }

}
