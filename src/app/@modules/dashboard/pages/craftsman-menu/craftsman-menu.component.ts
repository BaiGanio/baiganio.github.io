import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionnaireComponent } from 'src/app/@components/questionnaire/questionnaire.component';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
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

  ngOnInit() { console.log('Lifecycle methods should not be empty');
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
