import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/@services/user-data.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.scss']
})
export class ReportIssueComponent implements OnInit  {
  issueForm: UntypedFormGroup;
  issueImgSrc = '';
  user: any;
  issueSubmited = false;
  issueRejected = false;
  fileSelectMsg = 'No file selected yet.';
  fileUploadMsg = 'No file uploaded yet.';
  disabled = false;
  loading = false;

  constructor(
    private userDataService: UserDataService,
    private errorHandlerService: ErrorHandlerService,
    private fb: UntypedFormBuilder,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.issueImgSrc = '../../../../assets/images/no-profile-img.png';

    this.issueForm =
      this.fb.group({
        issuePicture: [
          null,
          [Validators.required]
        ],
        message: [
          null,
          [Validators.required]
        ]
    });
  }

  sendIssue() {
    this.loading = true;
    this.userDataService.sendIssueToAdmin({
        Text: this.issueForm.get('message').value,
        Img2Base64: this.issueImgSrc
      })
    .subscribe(
      () => {},
      error => {
        this.errorHandlerService.handleRequestError(error);
        this.issueForm.reset();
        this.clearPicture();
        this.loading = false;
      },
      () => {
        this.issueForm.reset();
        this.clearPicture();
        this.loading = false;
        this.snackbar.open('Email is sent to (BG) Dev Team!', 'X', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'successSnackbar'
        });
      }
    );
  }

  clearPicture() {
    this.issueImgSrc = '../../../../assets/images/no-profile-img.png';
  }

  clearForm() {
    this.issueForm.reset();
    this.clearPicture();
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.resizeImage(file, 800, 600).then(blob => {
        const reader = new FileReader();
        reader.onload = () => {
          this.issueImgSrc = reader.result.toString();
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
}
