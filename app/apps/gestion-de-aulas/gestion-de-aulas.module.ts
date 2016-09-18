import {
  Component
} from '@angular/core';
import {
  NgModule
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  Routes,
  RouterModule
} from '@angular/router';

@Component({
    template:'<h1>HOLAAAAAAAAAAAAA!</h1>'
})
class GestiondeAulas{
    
}


const routes: Routes = [{
    path: '',
    component: GestiondeAulas
}];
@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    declarations:[GestiondeAulas]
})
export default class GestiondeAulasModule{

}