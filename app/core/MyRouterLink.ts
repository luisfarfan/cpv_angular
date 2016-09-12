import {
    Component,
    ViewContainerRef,
    Compiler,
    ComponentRef,
    ComponentFactory,
    ViewChild,
    ComponentMetadata
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';
import {
    MenuServices
} from './services/menu.service';

@Component({
    selector: 'sidebar',
    template: `<ul #mymenu class="navigation navigation-main navigation-accordion"></ul>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [MenuServices]
})

export class MyRouterLink {
    @ViewChild('mymenu', {
        read: ViewContainerRef
    }) target: ViewContainerRef;
    private cmpRef: ComponentRef < any > ;

    constructor(private dataServices: MenuServices, private compiler: Compiler, private _viewContainerRef: ViewContainerRef) {}

    ngAfterViewInit() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        this.dataServices.getMenuLinks('?id_usuario=3').subscribe((res) => {
            localStorage.setItem('menu', JSON.stringify(res))
            let menustring = localStorage.getItem('menu')
            this.compileToComponent(res).then((factory: ComponentFactory < any > ) => {
                this.cmpRef = this.target.createComponent(factory)
            })
        })
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
            this.cmpRef = null;
        }
    }

    compileToComponent(template1: string): Promise < ComponentFactory < any >> {
        const metadata = new ComponentMetadata({
            template: template1,
            directives: ROUTER_DIRECTIVES
        });
        let decoratedCmp = Component(metadata)(class DynamicComponent {});
        return this.compiler.compileComponentAsync(decoratedCmp);
    }
}