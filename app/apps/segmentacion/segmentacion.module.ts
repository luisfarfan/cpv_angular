import {
  Component
} from '@angular/core';
import {
  NgModule
} from '@angular/core';
import {CommonModule} from '@angular/common'
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  SegmentacionService
} from './segmentacion.service';

import {
  FormsModule
} from '@angular/forms';

import {
  ProvinciaInterface
} from './provincia.interface';
import {
  DistritoInterface
} from './distrito.interface';
import {
  DepartamentoInterface
} from './departamento.interface';


@Component({
  templateUrl: 'app/apps/segmentacion/segmentacion.html',
  providers: [SegmentacionService]
})

class Segmentacion {
  private ccdd :any;
  private tabledata:boolean = false;
  private registros;
  private departamentos:DepartamentoInterface;
  private provincias:ProvinciaInterface;
  private distritos:DistritoInterface;

  constructor(private segmentacionservice: SegmentacionService) {
    this.cargarDepa()
  }

  cargarDepa() {
    this.segmentacionservice.getDepartamentos().subscribe(res => {
      this.departamentos = <DepartamentoInterface>res;
    })
  }

  cargarProvincias(ccdd: string, ccpp: string = "0") {
    this.ccdd = ccdd;
    this.segmentacionservice.getProvincias(ccdd, ccpp).subscribe(res => {
      this.provincias = < ProvinciaInterface > res;
      console.log(this.provincias)
    })
    this.distritos.ccdi = ''
    this.distritos.distrito = ''
    this.tabledata = false;
  }

  cargarDistritos(ccpp: string) {
    this.segmentacionservice.getDistritos(this.ccdd, ccpp,"0").subscribe(res => {
      this.distritos = < DistritoInterface > res;
    })
    this.cargarTabla()
  }

  cargarTabla(){
    this.segmentacionservice.getTabla().subscribe(res=>{
      this.tabledata = true
      this.registros=res;
    })
  }

}

const routes: Routes = [{
  path: '',
  component: Segmentacion
}];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  declarations: [Segmentacion]
})
export default class SegmentacionModule {}