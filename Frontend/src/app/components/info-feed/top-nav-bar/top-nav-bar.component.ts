import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service';

declare var $ :any;

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
   ) { }

  focusName: boolean;
  focusAddress: boolean;
  focusMobile: boolean;
  focusPin: boolean;
  focusMobileLogin: boolean;

  lForm: FormGroup = new FormGroup({
    loginmobile: new FormControl(null,[Validators.required, Validators.minLength(10)]) 
  });

  rForm: FormGroup = new FormGroup({
    orgName: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null,[Validators.minLength(10), Validators.required]),
    address: new FormControl(null, [Validators.required]),
    pincode: new FormControl(null, [Validators.required, Validators.maxLength(6), Validators.minLength(6)])
  });

  onFocus(i) {
    if(i == 1) {
        if(this.focusMobileLogin == false)
            this.focusMobileLogin = true;
    } else if (i == 2) {
        if(this.focusName == false)
            this.focusName= true;
    } else if (i == 3) {
        if(this.focusMobile == false)
            this.focusMobile = true;
    } else if (i == 4) {
        if(this.focusAddress == false)
            this.focusAddress = true;
    } else {
        if(this.focusPin == false)
            this.focusPin = true;
    }
  }

  ngOnInit() {
    this.focusMobileLogin = false;
    this.focusName = false;
    this.focusMobile = false;
    this.focusAddress = false;
    this.focusPin = false;
  }

  gotoRegister() {
    $("#login").modal("hide");
    this.lForm.reset();
    this.focusMobileLogin = false;
    this.focusName = false;
    this.focusMobile = false;
    this.focusAddress = false;
    this.focusPin = false;
    $("#register").modal("show");
  }

  gotoLogin() {
    $("#register").modal("hide");
    this.rForm.reset();
    this.focusMobileLogin = false;
    this.focusName = false;
    this.focusMobile = false;
    this.focusAddress = false;
    this.focusPin = false;
    $("#login").modal("show");
  }

  onLoginSubmit() {
    if(!this.lForm.valid)
      if(!this.rForm.controls.loginmobile.valid) this.focusMobileLogin = true;
    else this.userService.postLogin(this.lForm.value).subscribe(
      (data) => {
        this.userService.auth(data);
        //goto feed with side nav bar
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  onSubmit() {
    if(!this.rForm.valid) {
      if(!this.rForm.controls.orgName.valid) this.focusName = true;
      if(!this.rForm.controls.mobile.valid) this.focusMobile = true;
      if(!this.rForm.controls.address.valid) this.focusAddress = true;
      if(!this.rForm.controls.pincode.valid) this.focusPin = true;
    }else this.userService.postMember(this.rForm.value).subscribe(
      (message) => {
        alert('Registration successful!!');
        console.log(message);
        this.gotoLogin();
      },
      (err) => {
        alert('Registration unsuccessful!! An account already exists under this number!!')
        console.log(err);
        this.rForm.reset();
      }
    );
  }

}