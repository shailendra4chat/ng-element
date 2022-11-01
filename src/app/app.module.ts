import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  constructor(private injector: Injector){

    const ELEMENT_TAG = 'app-cat-fact';
    const el = createCustomElement(AppComponent, {injector});

    customElements.define(ELEMENT_TAG, el)
  }
 }

