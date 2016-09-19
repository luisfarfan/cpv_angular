import {
    AfterViewInit,
    ElementRef,
    Component
} from '@angular/core';
@Component({
  selector: 'cpv_layout',
  template: `
    <cpv_header></cpv_header>
    <main>
        <div class="page-container">
            <div class="page-content">
            <div class="sidebar sidebar-main">
				<div class="sidebar-content">
                <div class="sidebar-category sidebar-category-visible">
                <div class="category-content no-padding">
                <cpv_sidebaritems></cpv_sidebaritems>
                </div>
                </div>
                </div>
                </div>
                <div class="p-t-6 content-wrapper">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    </main>
    `
})
export class Layout implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}
    ngAfterViewInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/core/app.js";

        
        this.elementRef.nativeElement.appendChild(s);
        
    }
}
