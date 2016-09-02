import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    bootstrap: [LayoutComponent],
})

export class CoreModule{}
