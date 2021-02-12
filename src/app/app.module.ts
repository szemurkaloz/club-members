import { PersonBranchTypeFormComponent } from './components/person-registration-form/step5/person-branch-type-form/person-branch-type-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PersonLocationFormComponent } from './components/person-registration-form/step2/person-location-form/person-location-form.component';
import { PersonRegistrationFormComponent } from './components/person-registration-form/person-registration-form.component';
import { PersonConnectionComponent } from './components/person-registration-form/step3/person-connection/person-connection.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmailFormArrayComponent } from './components/person-registration-form/step3/person-connection/email-form-array/email-form-array.component';
import { PhoneNumbersFormArrayComponent } from './components/person-registration-form/step3/person-connection/phone-numbers-form-array/phone-numbers-form-array.component';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { PersonGroupComponent } from './components/person-registration-form/step4/person-group/person-group.component';
import { PersonOtherFormComponent } from './components/person-registration-form/step4/person-other-form/person-other-form.component';
import { PersonalDefaultFormComponent } from './components/person-registration-form/step1/personal-default-form/personal-default-form.component';
import { ClubTypeComponent } from './components/person-registration-form/step5/person-branch-type-form/clubType/club-type.component';
import { ClubSortNameComponent } from './components/person-registration-form/step5/person-branch-type-form/club-sort-name/club-sort-name.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDefaultFormComponent,
    MainNavComponent,
    PersonLocationFormComponent,
    PersonRegistrationFormComponent,
    PersonConnectionComponent,
    EmailFormArrayComponent,
    PhoneNumbersFormArrayComponent,
    ConfirmDialogComponent,
    PersonGroupComponent,
    PersonOtherFormComponent,
    PersonBranchTypeFormComponent,
    ClubTypeComponent,
    ClubSortNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CommonModule,
    CustomMaterialModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'hu-HU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
