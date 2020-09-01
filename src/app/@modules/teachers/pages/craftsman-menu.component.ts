import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { ErrorComponent } from 'src/app/@shared/components/error/error.component';
import { QuestionnaireComponent } from 'src/app/@shared/components/questionnaire/questionnaire.component';

@Component({
  selector: 'app-craftsman-menu',
  templateUrl: './craftsman-menu.component.html',
  styleUrls: ['./craftsman-menu.component.scss']
})
export class CraftsmanMenuComponent implements OnInit {
  loading = false;
  constructor(
    private dialog: MatDialog, private snackbar: MatSnackBar,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
  }


  addClassroom() {
    
  }

  addQuestionnaire() {
    const $dialogRef =
    this.dialog.open(
      QuestionnaireComponent,
      { width: '40vw', autoFocus: false }
    );
  }

  private addIPRangeAfterClosed($dialogRef) {
  
  }

}
