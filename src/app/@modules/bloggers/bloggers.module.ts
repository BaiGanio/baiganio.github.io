import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/@core/angular-material.module';
import { BloggersRoutingModule } from './bloggers-routing.module';
import { BloggerComponent } from './components/blogger/blogger.component';
import { BloggersComponent } from './bloggers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { EditorModule } from "@tinymce/tinymce-angular";

@NgModule({
    declarations: [
        BloggersComponent,
        BloggerComponent
    ],
    imports: [
        CommonModule,
        BloggersRoutingModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        // StoreModule.forRoot({ bloggers: bloggersReducer }),
        //EditorModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BloggersModule { }
