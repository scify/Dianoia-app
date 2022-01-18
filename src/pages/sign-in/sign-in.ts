import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ShapesApiProvider} from "../../providers/shapes-api/shapes-api";
import {LoaderService} from "../../providers/loader-service/loader-service";
import {AppStorageProvider} from "../../providers/app-storage/app-storage";

const EMAIL_PATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
const PASSWORD_MIN_LENGTH = 4;
const PASSWORD_MAX_LENGTH = 12;

/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})

export class SignInPage {

  signInForm: FormGroup;
  errorText: string = null;
  newAccountMode: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public menuCtrl: MenuController, private formBuilder: FormBuilder,
              public shapesApiProvider: ShapesApiProvider, private loaderService: LoaderService,
              public appStorageProvider: AppStorageProvider) {
    this.resetForms(this.newAccountMode);
  }

  resetForms(newAccountMode) {
    let extraFormControls = {};
    let extraValidation = {};
    if (newAccountMode) {
      extraFormControls = {
        password_confirmation: new FormControl('', Validators.required)
      };
      extraValidation = {
        validator: this.matchingPasswords('password', 'password_confirmation')
      };
    }
    this.signInForm = this.formBuilder.group({
      ...extraFormControls,
      email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
      password: new FormControl('', [Validators.required, Validators.minLength(PASSWORD_MIN_LENGTH), Validators.maxLength(PASSWORD_MAX_LENGTH)]),
    }, {...extraValidation});
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }

  onSignUp() {
    const formData = this.prepareFormData()
    this.shapesApiProvider.signUpUser(formData).subscribe(data => {
      this.loginAndRedirect(formData);
    }, error => {
      this.handleError(error.json());
    });
  }

  onLogIn() {
    this.loginAndRedirect(this.prepareFormData());
  }

  prepareFormData() {
    this.errorText = null;
    this.loaderService.showLoader();
    let formData = this.signInForm.getRawValue();
    return {
      email: formData.email,
      password: formData.password
    };
  }

  loginAndRedirect(formData) {
    this.shapesApiProvider.logInUser(formData).subscribe(async data => {
      const response = data.json();
      const auth_token = response.items[0].token;
      await this.appStorageProvider.set("auth_token", auth_token);
      this.menuCtrl.enable(true);
      await this.navCtrl.setRoot("HomePage");
      this.loaderService.hideLoader();
    }, error => {
      this.handleError(error.json());
    });
  }

  handleError(error) {
    this.errorText = error.error;
    this.loaderService.hideLoader();
  }

  setNewAccountMode(mode) {
    this.resetForms(mode);
    this.newAccountMode = mode;
  }
}
