import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { RouterModule } from '@angular/router';
import { DechetsComponent } from './dechets/dechets.component';
import { HomeComponent } from './home/home.component';
import { GestionComponent } from './gestion/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntrepriseComponent,
    DechetsComponent,
    HomeComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "", redirectTo: 'home', pathMatch: 'full'},
      {path: "entreprise" , component: EntrepriseComponent},
      {path: "dechets" , component: DechetsComponent},
      {path: "gestion" , component: GestionComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
