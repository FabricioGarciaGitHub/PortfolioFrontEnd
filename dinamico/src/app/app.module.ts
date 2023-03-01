import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { QrComponent } from './components/qr/qr.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalesComponent } from './components/modales/modales.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    BannerComponent,
    NavbarComponent,
    HeroComponent,
    ContactoComponent,
    ExpLaboralComponent,
    EducacionComponent,
    ProgressBarComponent,
    IdiomasComponent,
    ProyectosComponent,
    QrComponent,
    FormContactoComponent,
    FooterComponent,
    ModalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
