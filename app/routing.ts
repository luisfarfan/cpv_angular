import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    MenuServices
} from './core/services/menu.service';
import {
    LoginService
} from './core/services/login/login.service';

import {Http} from '@angular/http';
import {Layout} from './core/components/layout.component';

const routes: Routes = getRoutes();
export const routing = RouterModule.forRoot(routes);

function getRoutes() {
    let http: Http;
    let loginservice = new LoginService(http);
    let session = loginservice.getJsonSession()
    var results: Array < Object > = Array < Object > ();
    let validsession: boolean = loginservice.isValidSession();

    results.push({
        path: 'gestion-de-recursos',
        component: Layout,
        loadChildren: 'app/apps/provincial/provincial.module'
    })
    results.push({
        path: 'gestion-de-aulas',
        component: Layout,
        loadChildren: 'app/apps/gestion-de-aulas/gestion-de-aulas.module'
    })
    results.push({
        path: '',
        loadChildren: 'app/core/pages/login/login.module'
    })
    results.push({
        path: 'segmentacion',
        component: Layout,
        loadChildren: 'app/apps/segmentacion/segmentacion.module'
    })
    if (validsession) {
        let modules: Array < string > = < Array < string >> session[0]['routes'];
        modules.map(module => results.push({
            path: module,
            component: Layout,
            loadChildren: `app/apps/${module}/${module}.module`
        }))
    }
    return results
}