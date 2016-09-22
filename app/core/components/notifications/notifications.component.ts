import {Component} from '@angular/core';
import {LoginService} from './../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
    selector : 'cpv_notifications',
    templateUrl : 'app/core/components/notifications/notifications.html',
    providers:[LoginService]
})

export class Notifications{
    private nombrecompleto:string;
    private session:Object;
    constructor(private loginservice:LoginService,private router:Router){
        this.session=this.loginservice.getJsonSession()
        this.nombrecompleto=this.session[0].nom_completo
    }

    logout(){
        this.loginservice.logout()
        this.router.navigate(['/'])
    }
}
