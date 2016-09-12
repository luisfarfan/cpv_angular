import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


@Component({
    template: `<H1>Segmentacion</H1>
     Welcome
    ` 
})
class Segmentacion { }

const routes: Routes = [{ path: '', component: Segmentacion}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [Segmentacion]
})
export default class SegmentacionModule { }
