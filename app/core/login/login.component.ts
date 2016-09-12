import {Component} from '@angular/core';
import {LoginService} from './../services/login/login.service';
import {Router} from '@angular/router';
import {LoginInterface} from './login.interface'

@Component({
    selector: 'my-app',
    templateUrl : 'app/core/login/login.component.html',
    providers: [LoginService]
})
export class LoginComponent {

    private login = new LoginInterface();
    private validLogin = this.loginservice.isValidSession();
    private errorLogin = false;

    constructor(private loginservice: LoginService, private router:Router){
        if(this.validLogin){
            this.router.navigate(['seguridad'])
        }
    }

    doLogin(){
        let url = `?username=${this.login.username}&clave=${this.login.clave}`
        this.loginservice.login(url)
        this.validLogin = this.loginservice.isValidSession()
        console.log(this.loginservice.isValidSession())
        if(this.validLogin){
            document.location.reload()
        }else{
            this.errorLogin = true
        }
        
    }
 }