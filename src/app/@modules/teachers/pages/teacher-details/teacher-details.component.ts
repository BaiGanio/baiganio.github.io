import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/@services/teacher.service';
import { TeacherPreviewModel } from '../../models/teacher-preview.model';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
    selector: 'app-teacher-details',
    templateUrl: './teacher-details.component.html'
})
export class TeacherDetailsComponent implements OnInit {
    loading = false;
    teacher: TeacherPreviewModel;

    constructor(
        private activatedRoute: ActivatedRoute,
        private errorHandlerService: ErrorHandlerService,
        private teacherService: TeacherService
    ) {}

    ngOnInit() {
        this.loading = true;
        this.teacherService.getTeacherById(this.activatedRoute.snapshot.params.id)
        .subscribe(
            response => {
                this.teacher =
                    new TeacherPreviewModel(
                        response.body.id,
                        // response.body.full_name,
                        // response.body.status
                    );
            }, error => {
                this.errorHandlerService.handleRequestError(error);
                this.loading = false;
            },
            () => { this.loading = false; }
        );
    }
}
