import {BrowserModule} from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Header} from './header/header.component';
import {Notifications} from './notifications/notifications.component';
import {SidebarItems} from './sidebar-items/sidebar-items.component';

import {routing} from './../../routing';

import { Layout } from './layout.component';

const LAYOUT_COMPONENTS = [Header,Notifications,SidebarItems,Layout]

@NgModule({
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule,routing,BrowserModule],
  declarations: [LAYOUT_COMPONENTS],
  bootstrap: [Layout],
})
export class LayoutModule {
}
