import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth.service';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddExpertComponent } from './add-expert/add-expert.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    LoginComponent,
    HomeComponent,
    AddExpertComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    Ng4GeoautocompleteModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
