import {
  Component
} from '@angular/core';
import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  Routes,
  RouterModule
} from '@angular/router';

@Component({
  templateUrl: 'app/apps/presupuesto-anual/presupuesto.html'
})
class PresupuestoAnual {
}

const routes: Routes = [{
  path: '',
  component: PresupuestoAnual
}];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [PresupuestoAnual]
})
export default class PresupuestoAnualModule {

}