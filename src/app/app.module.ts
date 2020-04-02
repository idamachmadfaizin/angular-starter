import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdminComponent } from './module/admin/admin.component';
import { HomeComponent } from './module/home/home.component';
import { LoginComponent } from './module/login/login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AngularFireModule } from '@angular/fire';
import { environment } from '@env/environment';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { IdmInputModule } from './core/component/idm-input/idm-input.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    CoreModule, // my core module
    AngularFireModule.initializeApp(environment.firebaseConfig), // init firebase
    AngularFireMessagingModule, // firebase message module
    SweetAlert2Module.forRoot(), // sweetalert module
    IdmInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
