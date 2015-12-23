import {bootstrap}    from 'angular2/platform/browser';
import {Component, provide,View,OnInit,Inject} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Test} from "./Test";

// Root Component
@Component({
    selector: 'RootComponent'
})
@View({
    templateUrl: 'navigation/topnav.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/test', component: Test, name: 'Test', useAsDefault: true},
    {path: '/...', name: 'T', redirectTo: ['Test']}
])
export class RootComponent implements OnInit {
    constructor(){

    }
    ngOnInit(){
        $(".nav a").on("click", function(){
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });
        var pathname = window.location.pathname;
        console.log(pathname);
    }
}


bootstrap(RootComponent, [ROUTER_PROVIDERS]);
