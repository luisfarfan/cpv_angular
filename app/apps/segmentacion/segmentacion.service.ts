import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import {
    Headers,
    RequestOptions,
    RequestMethod,
    Request
} from '@angular/http';

import {
    Observable
} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SegmentacionService {
    constructor(private http: Http) {}

    private depaUrl: string = 'http://192.168.200.123:8080/segrecargaDepa/';
    private provUrl: string = 'http://192.168.200.123:8080/segrecargaProv/';
    private distUrl: string = 'http://192.168.200.123:8080/segrecargaDis/';
    private zonaUrl: string = 'http://192.168.200.123:8080/segrecargaZona/';
    private tablaUrl: string = 'http://192.168.200.123:8080/segrecargaTabla/';
    
    getDepartamentos(): Observable < Object > {
        return this.http.get(this.depaUrl).map(this.extractData).catch(this.handleError)
    }

    getProvincias(ccdd: string, ccpp:string): Observable < Object > {
        let queryparameters:string = `${ccdd}/${ccpp}/`;
        let url: string = this.provUrl+queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getDistritos(ccdd: string, ccpp:string, ccdi:string): Observable < Object > {
        let queryparameters:string = `${ccdd}/${ccpp}/${ccdi}/`;
        let url: string = this.distUrl + queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getZona(ubigeo: string, zona:string): Observable < Object > {
        let queryparameters:string = `${ubigeo}/${zona}/`;
        let url: string = this.distUrl + queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }

    getTabla(ubigeo: string="020601", zona:string="00100"): Observable < Object > {
        let queryparameters:string = `${ubigeo}/${zona}/`;
        let url: string = this.tablaUrl + queryparameters;
        return this.http.get(url).map(this.extractData).catch(this.handleError)
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}