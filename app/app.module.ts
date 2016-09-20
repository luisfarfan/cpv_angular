import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  HttpModule
} from '@angular/http';
import {
  CommonModule
} from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import {
  RouterModule
} from '@angular/router';

import {App} from './app.component'
import {
  routing
} from './routing';

import {CoreModule} from './core/core.module';

import {
  Layout
} from './core/components/layout.component';

@NgModule({
  imports: [CommonModule,
    BrowserModule,    
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    HttpModule,
    routing,
  ],
  declarations: [App],
  bootstrap:[App]
  
})

export class AppModule{

}
