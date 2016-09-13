import {
  Component
} from '@angular/core';
import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

@Component({
  templateUrl: 'app/apps/segmentacion/segmentacion.html',

})
class Segmentacion {
  
  private hola:string = 'HOLA!';
  drop(algo){
    
  }
}

const routes: Routes = [{
  path: '',
  component: Segmentacion
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [Segmentacion]
})
export default class SegmentacionModule {

}