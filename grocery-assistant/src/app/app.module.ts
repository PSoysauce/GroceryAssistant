import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { NeedHelpComponent } from './need-help/need-help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VolunteerComponent,
    NeedHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
