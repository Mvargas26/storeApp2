import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgOptimizedImage } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteProductoComponent } from './components/componente-producto/componente-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
