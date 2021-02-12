import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonRegistrationFormComponent } from './components/person-registration-form/person-registration-form.component'

const routes: Routes = [
  { path: 'person-registration-form', component: PersonRegistrationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
