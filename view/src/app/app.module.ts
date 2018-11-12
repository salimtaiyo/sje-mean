import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ResourcesTableComponent } from './components/resources-table/resources-table.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';
import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule
} from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';


>>>>>>> 6ad867fa77d016a6a1ccd43abcaaed2b168a9e2c

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ResourcesTableComponent,
    HeaderComponent,
    NavbarComponent,
<<<<<<< HEAD
    SearchBarComponent
=======
>>>>>>> 6ad867fa77d016a6a1ccd43abcaaed2b168a9e2c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
=======
    HttpClientModule,
>>>>>>> 6ad867fa77d016a6a1ccd43abcaaed2b168a9e2c
    AccordionModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,

    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
<<<<<<< HEAD
    MatToolbarModule,
    HttpClientModule
=======
    MatToolbarModule
>>>>>>> 6ad867fa77d016a6a1ccd43abcaaed2b168a9e2c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule {}
=======
export class AppModule { }
>>>>>>> 6ad867fa77d016a6a1ccd43abcaaed2b168a9e2c
