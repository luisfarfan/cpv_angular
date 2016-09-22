import {
    Component
} from '@angular/core';
import {LoginService} from './../../services/login/login.service';
import {LoginInterface} from './login.interface';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'app/core/pages/login/login.html',
    providers:[LoginService]
})
export class LoginComponent {
   private login = new LoginInterface();
    private validLogin = this.loginservice.isValidSession();
    private errorLogin = false;

    constructor(private loginservice: LoginService, private router: Router) {
        console.log(this.validLogin)
        if (this.validLogin) {
            this.router.navigate(['segmentacion'])
        }
    }

    doLogin() {
        let url = `?username=${this.login.username}&clave=${this.login.clave}`
        this.loginservice.doLogin(url).subscribe(res => {
            if(Object.keys(res).length === 0){
                this.errorLogin = true;
            }else{
                document.location.reload();
                localStorage.setItem('usuario',JSON.stringify(res));
            }
        })


    }
}