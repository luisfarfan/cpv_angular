import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic';
import {
    LayoutModule
} from './core/components/layout.module';
import {
    enableProdMode
} from '@angular/core';

    enableProdMode()


platformBrowserDynamic().bootstrapModule(LayoutModule)