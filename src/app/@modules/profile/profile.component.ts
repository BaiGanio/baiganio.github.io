import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/@services/user-data.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { Subscribe4NotificationsComponent } from './components/subscribe4notifications/subscribe4notifications.component';
import { PassStrengthComponent } from './components/pass-strength/pass-strength.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/@store/app.state';
import { DeleteProfileComponent } from './components/delete-profile/delete-profile.component';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})

export class ProfileComponent implements OnInit {
    loading = false;
    successfulUpdate = false;
    successfulUpdateMessage = '';
    profileImgSrc = '';
    oldProfilePic = '';
    user: any;
    profileDataFG: FormGroup;
    profileImageFG: FormGroup;
    formData: FormGroup;
    roles = '';
    subscriptions = 0;
    courses = 0;

    constructor(
        private userService: UserDataService,
        private errorHandlerService: ErrorHandlerService,
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private snackbar: MatSnackBar,
        private store: Store<AppState>
    ) {
        // this.profileDataFG =
        //     this.formBuilder.group({
        //         firstName: [''],
        //         lastName: [''],
        //         username: [''],
        //         email: ['']
        //     });

        // this.profileImageFG =
        //     this.formBuilder.group({
        //         profilePicture: ['', Validators.required]
        //     });


    }

    ngOnInit() {
        this.loading = true;
        this.getUserByToken();
        this.formData =
          this.formBuilder.group({
              firstName: ['', Validators.required],
              lastName: ['', Validators.required],
              phone: ['', [ Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(14)]],
              email: ['', [Validators.required, Validators.email]]
          });
    }
    keyPress(event: any) {
      //https://www.tutsmake.com/angular-12-phone-number-validation-example/
      const pattern = /[0-9\+\-\ ]/;

      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
    getUserByToken() {
        this.userService.getUserByToken()
            .subscribe(
                response => {
                    this.handleSuccess(response);
                },
                error => {
                    this.handleError(error);
                },
                () => { this.loading = false; }
            );
    }

    handleSuccess(response): void {
        this.loading = false;
        this.user = response.body;


        // console.log(this.user);
        this.userService.setUserData(this.user);
        this.profileImgSrc = this.user.imgUrl == null ? './assets/images/no-profile-img.png' : this.user.imgUrl;
        this.oldProfilePic = this.profileImgSrc;
        for (let i = 0; i < this.user.roles?.length; i++) {
            this.roles += this.user.roles[i].roleName;
            if (i + 1 < this.user.roles.length) {
                this.roles += ', ';
            }
        }
        this.subscriptions =
            this.user.subscriptions != null
                ? this.user.subscriptions.length
                : 0;
        this.courses =
            this.user.courses != null
                ? this.user.courses.length
                : 0;

        this.patchFormData();
    }

    handleError(error): void {
        this.loading = false;
        this.errorHandlerService.handleRequestError(error);
    }
    public checkError = (controlName: string, errorName: string) => {
      return this.formData.controls[controlName].hasError(errorName);
    }
    updateProfile() {
        this.loading = true;
        this.userService.updateProfile({
            FirstName: this.profileDataFG.value.firstName,
            LastName: this.profileDataFG.value.lastName,
            Username: this.profileDataFG.value.username,
            Email: this.profileDataFG.value.email,
        }).subscribe(
            response => {
                this.loading = false;
                this.successfulUpdate = true;
                this.successfulUpdateMessage = 'Personal Info updated successfully!';
                this.getUserByToken();
                this.clearForm();
            },
            error => {
                this.loading = false;
                this.clearForm();
                this.errorHandlerService.handleRequestError(error);
            }
        );
    }

    updateProfilePicture() {
        this.loading = true;

        if (this.profileImgSrc !== this.user.image && this.profileImgSrc.length > 1024) {
            this.userService.updateProfilePicture({
                ImageAsBase64: this.profileImgSrc,
            }).subscribe(
                response => {
                    this.loading = false;
                    this.successfulUpdate = true;
                    this.successfulUpdateMessage = 'Profile Picture updated successfully!';
                },
                error => {
                    this.loading = false;
                    this.profileImageFG.reset();
                    this.errorHandlerService.handleRequestError(error);
                }
            );
        }
    }


    clearPicture() {
        this.profileImgSrc = this.oldProfilePic;
        this.profileImageFG.controls.profilePicture.setValue('');
    }

    clearForm() {
        this.profileDataFG.patchValue({
            firstName: this.user.first_name,
            lastName: this.user.last_name,
            username: this.user.username,
            email: this.user.email
        });
    }
    patchFormData(){
      this.formData.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phone: this.user.phone,
        email: this.user.email
    });
    }

    onFileSelected(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.resizeImage(file, 800, 600).then(blob => {
                const reader = new FileReader();
                reader.onload = () => {
                    this.profileImgSrc = reader.result.toString();
                };
                reader.readAsDataURL(blob);
            },
                error => {
                    console.error('Photo error!', error);
                });
        }
    }

    resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob> {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = URL.createObjectURL(file);
            image.onload = () => {
                const width = image.width;
                const height = image.height;

                if (width <= maxWidth && height <= maxHeight) {
                    resolve(file);
                }

                let newWidth;
                let newHeight;

                if (width > height) {
                    newHeight = height * (maxWidth / width);
                    newWidth = maxWidth;
                } else {
                    newWidth = width * (maxHeight / height);
                    newHeight = maxHeight;
                }

                const canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;

                const context = canvas.getContext('2d');

                context.drawImage(image, 0, 0, newWidth, newHeight);

                canvas.toBlob(resolve, file.type);
            };
            image.onerror = reject;
        });
    }

    dismiss() {
        this.successfulUpdate = false;
    }

    passStrength() {
        const $dialogRef =
            this.dialog.open(
                PassStrengthComponent
            );
    }

    changePassword() {
        const $dialogRef =
            this.dialog.open(
                ChangePasswordComponent,
                {
                    width: '400px',
                    autoFocus: false
                }
            );
        this.tryUpdatePass($dialogRef);
    }

    editNotifications() {
        const $dialogRef =
            this.dialog.open(Subscribe4NotificationsComponent, {
                data: {
                    model: { emailSubs: false },
                    width: '400px',
                },
                autoFocus: false
            });
    }

    private tryUpdatePass($dialogRef) {
        let password = '';
        $dialogRef.afterClosed()
            .subscribe(response => {
                if (response) {
                    password = response.Password;
                    this.userService.updatePassword({
                        Password: response.Password
                    }).subscribe(
                        success => {
                            this.loading = false;
                            this.user.pass_strength = success;
                            this.successfulUpdate = true;
                            this.successfulUpdateMessage = 'Your password was updated successfully!';
                        },
                        error => {
                            this.loading = false;
                            this.errorHandlerService.handleRequestError(error);
                        }
                    );
                }
            })
    }

    onSubmit(data: any): void {

    }

    deleteAccount(){

      const $dialogRef =
        this.dialog.open(
          DeleteProfileComponent, {
            data: {
              title: `This action will delete your account and can't be undone!`,
              confirmText: 'Delete',
              rejectText: 'Dismiss',
              model: this.user.id
            }
          });

        $dialogRef.afterClosed()
          .subscribe(response => {
            if (response) {
              this.userService.deleteAccount()
              .subscribe(
                  response => {
                      alert(response);
                  },
                  error => {
                      this.handleError(error);
                  },
                  () => { this.loading = false; }
              );
            }
          });


    }

}
