import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUserComponent } from './components/home/list-user/list-user.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileUserComponent } from './components/profile/profile-user/profile-user.component';
import { ListMessageComponent } from './components/profile/list-message/list-message.component';
import { FormAddTechnosComponent } from './components/profile/form-add-technos/form-add-technos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListUserComponent,
    RegisterComponent,
    LoginComponent,
    AProposComponent,
    ContactComponent,
    ProfileUserComponent,
    ListMessageComponent,
    FormAddTechnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
