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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
<<<<<<< HEAD:frontend/src/app/app.module.ts
=======
import { FormulaTableComponent } from './components/formula-table/formula-table.component';
>>>>>>> ElvisA:frontend/src/app/app.module.ts

import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { FilterPipe } from './components/resources-table/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ResourcesTableComponent,
    HeaderComponent,
    NavbarComponent,
<<<<<<< HEAD:frontend/src/app/app.module.ts
    SearchBarComponent
=======
    SearchBarComponent,
    FormulaTableComponent,
    FilterPipe,
>>>>>>> ElvisA:frontend/src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,

    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
