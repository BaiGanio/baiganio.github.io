import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogData } from 'src/app/@shared/interfaces/base-dialog.interface';
import { EditCourseModel } from 'src/app/@modules/courses/models/edit-course.model';
import { CoursePreviewModel } from '../../models/course-preview-model.module';
import { TeacherService } from 'src/app/@services/teacher.service';
import { TeacherPreviewModel } from 'src/app/@modules/teachers/models/teacher-preview.model';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  editCourseForm: FormGroup;
  editCourseImageForm: FormGroup;
  selectTeacherForm: FormGroup;
  model: CoursePreviewModel;
  loading = false;
  defaultCourseImg: string;
  teachers = new Array<TeacherPreviewModel>();
  activeTab = 1;

  constructor(
    public dialogRef: MatDialogRef<EditCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogData,
    private formBuilder: FormBuilder,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    // this.getTeachers();
    this.model = this.data.model;
    console.log(this.model);
    this.editCourseForm =
        this.formBuilder.group({
        CourseId: [this.data.model.Id],
        Name: [this.data.model.Name],
        Description: [this.data.model.Description],
        IsActive: [this.data.model.IsActive.toString()],
        StartDate: [this.data.model.StartDate],
        EndDate: [this.data.model.EndDate],
      });
    this.selectTeacherForm =
      this.formBuilder.group({
        Teacher: ['']
      });
    this.editCourseImageForm =
      this.formBuilder.group({
        CourseImg: ['', Validators.required]
      });

    this.defaultCourseImg =
      this.model.Image ?
      this.model.Image :
      '../../../../assets/images/no-profile-img.png';
    this.model.Image = this.defaultCourseImg;
  }

  onRejectClick() {
    this.dialogRef.close();
  }

  editCourse() {
    // const teachersArray = this.editCourseForm.controls.Teachers.value.split(', ');
    // teachersArray.forEach(element => {
    //   const formattedElement = element.trim();
    //   const teacher = {
    //     FirstName: formattedElement.split(' ')[0],
    //     LastName: formattedElement.split(' ')[1]
    //   };
    //   this.teachers.push(teacher);
    // });
    const updateCourseEntry = {
      label: 'updateCourseInfo',
      course: new EditCourseModel (
        this.editCourseForm.controls.CourseId.value,
        this.editCourseForm.controls.Name.value,
        this.editCourseForm.controls.Description.value,
        this.editCourseForm.controls.IsActive.value,
        this.editCourseForm.controls.StartDate.value,
        this.editCourseForm.controls.EndDate.value
      )
    };

    this.dialogRef.close(updateCourseEntry);
  }

  editCourseImage() {
    const updatedCoursePicture = {
      label: 'updateCoursePicture',
      img2base64: this.model.Image
    };

    this.dialogRef.close(updatedCoursePicture);
  }

  addTeacher2Course() {
    const teacherEntry = {
      label: 'addTeacher2Course',
      teacher: {
        id: this.teachers.find(t => t.Id === this.selectTeacherForm.controls.Teacher.value).Id,
        userId: this.teachers.find(t => t.Id === this.selectTeacherForm.controls.Teacher.value).UserId,
        accrNumber: this.teachers.find(t => t.Id === this.selectTeacherForm.controls.Teacher.value).AccrNumber
      }
    };

    this.dialogRef.close(teacherEntry);
  }

  clearPicture() {
    this.model.Image = this.defaultCourseImg;
    this.editCourseImageForm.controls.CourseImg.setValue('');
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.resizeImage(file, 800, 600).then(blob => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.model.Image = reader.result.toString();
        };
        reader.readAsDataURL(blob);
      },
      error => {
        console.error('Photo error!', error);
        this.model.Image = this.defaultCourseImg;
      });
    }
  }

  private getTeachers() {
    this.teacherService.getTeachers()
    .subscribe(
      response => {
        response.body.forEach(element => {
          const c = {
            Id: element.id || '',
            Email: element.email || '',
            Image: element.image || '',
            Name: element.name || '',
            UserId: element.user_id || '',
            AccrNumber: element.accr_number || '',
            Status: element.status || '',
            CreatedOn: element.created_on,
            ModifiedOn: element.modified_on,
            Courses: element.courses || ''
          };
          this.teachers.push(c as TeacherPreviewModel);
        });
      }
    );
  }

  private resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob> {
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
