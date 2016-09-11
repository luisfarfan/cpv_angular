import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    MenuServices
} from './core/services/menu.service';


const routes: Routes = getRoutes();

export const routing = RouterModule.forRoot(routes);

function getRoutes(){
  var results :Array<Object> = Array<Object>();
  let screens :Array<string> = ["gestion-de-aulas", "gestion-de-usuarios", "gestion-de-roles", "provincial", "departamental"]

  results.push({ path: '' ,redirectTo: 'welcome', pathMatch: 'full'});
  results.push({ path: 'welcome', loadChildren: 'app/screens/welcome.module' })
  screens.map(screenId => results.push({path: screenId, loadChildren: 'app/screens/' + screenId + '.module' }))
  console.log(results)
  return results 
}