import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing }        from '../routing';

@NgModule({
    imports: [BrowserModule,HttpModule,routing],
    declarations: [LayoutComponent, HeaderComponent],
    bootstrap: [LayoutComponent],
})

export class CoreModule{}
