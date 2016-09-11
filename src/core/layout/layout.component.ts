import {
    AfterViewInit,
    ElementRef,
    Component
} from '@angular/core';

import { MyRouterLink } from '../MyRouterLink';

@Component({
    selector: 'my-app',
    templateUrl: 'layout.component.html',
    directives: [MyRouterLink] 
})
export class LayoutComponent implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}
    ngAfterViewInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "public/assets/js/core/app.js";
        this.elementRef.nativeElement.appendChild(s);
    }
}