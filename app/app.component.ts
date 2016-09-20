import {
    AfterViewInit,
    ElementRef,
    Component
} from '@angular/core';
@Component({
  selector: 'cpv_layout',
  template: `<router-outlet></router-outlet>`
})
export class App implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}
    ngAfterViewInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/core/app.js";

        
        this.elementRef.nativeElement.appendChild(s);
        
    }
}
