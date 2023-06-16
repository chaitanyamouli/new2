import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProComponent } from './pro/pro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { SubBannerComponent } from './sub-banner/sub-banner.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcom/welcome.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { SignupComponent } from './signup/signup.component';
import { Card1Component } from './card1/card1.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProComponent,
    NavbarComponent,
    BannerComponent,
    CardComponent,
    ButtonComponent,
    FooterComponent,
    FaqComponent,
    SubBannerComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    SignupComponent,
    Card1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
