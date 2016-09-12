import {Component} from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
    selector : 'header',
    templateUrl: 'app/core/header/header.component.html',
    providers: [LoginService]
})
export class HeaderComponent {
    constructor(private loginservice : LoginService){

    }

    logout(){
        this.loginservice.logout();
        this.loginservice.logout('menu');
        document.location.reload()
    }
}