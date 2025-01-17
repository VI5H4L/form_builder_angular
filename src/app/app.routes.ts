import { Routes } from '@angular/router';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicForm2Component } from './components/dynamic-form2/dynamic-form2.component';


export const routes: Routes = [
    { path: '', component: FormBuilderComponent },
    { path: 'dynamic-form', component: DynamicFormComponent },
    { path: 'dynamic-form2', component: DynamicForm2Component },
  ];
  