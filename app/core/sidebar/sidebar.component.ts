import {
    Component,
    AfterViewInit
} from '@angular/core';
import {
    MenuServices
} from '../services/menu.service';


@Component({
    selector: '',
    templateUrl: 'app/core/sidebar/sidebar.component.html',
    providers: [MenuServices]
})

export class SidebarComponent {
    private sidebar: any;
    private menustring: string = '';
    constructor(private menuservices: MenuServices) {

        this.menuservices.getMenuLinks().subscribe((data) => {
            Object.keys(data).forEach(items => {
                this.menustring += '<li><a href="#"><i class="icon-stack"></i> <span>' + data[items].TITULO + '</span></a></li>'
            });
        })

    }
}