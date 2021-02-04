import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalDefaultFormComponent } from './personal-default-form/personal-default-form.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PersonLocationFormComponent } from './person-location-form/person-location-form.component';
import { PersonRegistrationFormComponent } from './person-registration-form/person-registration-form.component';
import { PersonConnectionComponent } from './components/person-connection/person-connection.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmailFormArrayComponent } from './components/person-connection/email-form-array/email-form-array.component';
import { PhoneNumbersFormArrayComponent } from './components/person-connection/phone-numbers-form-array/phone-numbers-form-array.component';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { PersonGroupComponent } from './components/person-group/person-group.component';
import { PersonOtherFormComponent } from './components/person-other-form/person-other-form.component';
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
    PersonOtherFormComponent
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
