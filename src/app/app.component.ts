import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard">仪表板</a>
        <a routerLink="/heroes">英雄列表</a>
    </nav>
    <router-outlet></router-outlet>
    `
    // RouterOutlet是由RouterModule提供的指令之一。 当我们在应用中导航时，路由器就把激活的组件显示在<router-outlet>里面。
})
export class AppComponent {
    title = '英雄之旅';
}
