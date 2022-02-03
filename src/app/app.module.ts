import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports 

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { TrainerComponent } from './components/trainer/trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    CatalogueComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
