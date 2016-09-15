import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing }        from '../routing';
import { LoginComponent } from './login/login.component';
import { MyRouterLink} from './MyRouterLink';

var login = localStorage.getItem('usuario');
var _declarations = []
var _bootstrap = []

if(login==null){
    _declarations = [LoginComponent]
    _bootstrap = [LoginComponent]
}else{
    _declarations = [LayoutComponent, HeaderComponent,MyRouterLink]
    _bootstrap = [LayoutComponent]
}

@NgModule({
    imports: [BrowserModule,HttpModule,routing,JsonpModule,FormsModule],
    declarations: _declarations,
    bootstrap: _bootstrap,
})

export class CoreModule{}
