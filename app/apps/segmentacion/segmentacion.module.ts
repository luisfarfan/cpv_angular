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
import {
  SegmentacionService
} from './segmentacion.service';
import {
  BrowserModule
} from '@angular/platform-browser';
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
  private departamentos:DepartamentoInterface;
  private provincias:ProvinciaInterface;
  private distritos:Object=[];

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
    })
  }

  cargarDistritos(ccpp: string, ccdi: string = "0") {
    let ccdd: string = this.ccdd;
    this.cargarTabla()

  }
  cargarTabla(){
    this.segmentacionservice.getTabla().subscribe(res=>{
      this.tabledata = true
    })
  }

}

const routes: Routes = [{
  path: '',
  component: Segmentacion
}];

@NgModule({
  imports: [RouterModule.forChild(routes), BrowserModule, FormsModule],
  declarations: [Segmentacion]
})
export default class SegmentacionModule {}