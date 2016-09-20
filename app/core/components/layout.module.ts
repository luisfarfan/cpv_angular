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
import {
  Header
} from './header/header.component';
import {
  Notifications
} from './notifications/notifications.component';
import {
  SidebarItems
} from './sidebar-items/sidebar-items.component';
import {
  Layout
} from './layout.component';

import {CoreModule} from './../core.module';

import {
  routing
} from './../../routing';


const LAYOUT_COMPONENTS = [Header, Notifications, SidebarItems]

@NgModule({
  imports: [CommonModule,CoreModule,routing],
  declarations: [Layout],
})
export class LayoutModule {}