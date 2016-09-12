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
    private menustring: string = `<div class="sidebar-content">
    <!-- Main navigation -->
    <div class="sidebar-category sidebar-category-visible">
        <div class="category-content no-padding">
            <ul class="navigation navigation-main navigation-accordion">
                <li class="navigation-header"><span>Menu Principal</span> <i class="icon-menu" title="Main pages"></i>
                </li>
                <li class="active">
                    <a href="#"><i class="icon-stack"></i> <span>Modulo de Usuarios</span></a>
                    <ul>
                        <li><a routerLink="/login" routerLinkActive="active">Usuarios</a></li>
                        <li><a routerLink="/seguridad" routerLinkActive="active">Agregar</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>`

    constructor(private dataServices: MenuServices, private compiler: Compiler, private _viewContainerRef: ViewContainerRef) {}

    ngAfterViewInit() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        this.compileToComponent(this.menustring).then((factory: ComponentFactory < any > ) => {

            this.cmpRef = this.target.createComponent(factory)
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