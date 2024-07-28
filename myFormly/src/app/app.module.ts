import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { UserListComponent } from './user/user-list/user-list.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserService } from './user/user.service';
import { alphabetValidator, noSpaceValidator } from './user/formValidators/nameValidators';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormlyModule.forRoot({
      validators: [
        { name: 'alphabet', validation: alphabetValidator },
        { name: 'noSpaces', validation: noSpaceValidator },
      ],
      validationMessages: [
        { name: 'alphabet', message: 'Only alphabests are allowed.' },
        { name: 'noSpaces', message: 'No spaces are allowed.' },
        { name: 'required', message: 'This field is required' }
      ]
    }),
    ReactiveFormsModule,
    FormlyBootstrapModule,
    MatDialogModule
  ],
  providers: [UserService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
