import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic';
import {
    CoreModule
} from './core/core.module';
import {
    enableProdMode
} from '@angular/core';

if (process.env.ENV == 'production') {
    enableProdMode()
}

platformBrowserDynamic().bootstrapModule(CoreModule)