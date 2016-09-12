import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    MenuServices
} from './core/services/menu.service';

import {LoginComponent} from './core/login/login.component';
import {SeguridadComponent} from './core/seguridad/seguridad.component';


const routes: Routes = getRoutes();

export const routing = RouterModule.forRoot(routes);

function getRoutes(){
  var results :Array<Object> = Array<Object>();
  let screens :Array<string> = ["gestion-de-aulas", "gestion-de-usuarios", "gestion-de-roles", "provincial", "departamental"]

  results.push({ path: '', component:LoginComponent })
  results.push({ path: 'welcome', loadChildren:'app/core/welcome/welcome.module' })
  results.push({ path: 'segmentacion', loadChildren:'app/apps/segmentacion/segmentacion.module' })
  //screens.map(screenId => results.push({path: screenId, loadChildren: 'app/screens/' + screenId + '.module' }))
  console.log(results)
  return results 
}