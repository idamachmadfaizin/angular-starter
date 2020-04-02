import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from '@app/faker/fake-backend';
import { IdmInputModule } from './component/idm-input/idm-input.module';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { IdmAlertComponent } from './component/idm-alert/idm-alert.component';

@NgModule({
  declarations: [IdmAlertComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  exports: [IdmInputModule]
})
export class CoreModule { }
