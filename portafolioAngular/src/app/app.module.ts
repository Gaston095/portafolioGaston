import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderRedesComponent } from './header-redes/header-redes.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { BodyComponent } from './components/body/body.component';
import { PortadaComponent } from './components/portada/portada.component';
import { AcerdaDeComponent } from './components/acerca-de/acerda-de.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLogoComponent,
    HeaderMenuComponent,
    HeaderRedesComponent,
    HeaderLoginComponent,
    BodyComponent,
    PortadaComponent,
    AcerdaDeComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
