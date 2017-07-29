import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    moduleId: module.id,
    styleUrls: ['./app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">仪表板</a>
        <a routerLink="/heroes" routerLinkActive="active">英雄列表</a>
    </nav>
    <router-outlet></router-outlet>
    `
    // <a href="/dashboard">仪</a> 纯html方式会使单击后整个页面被重新加载
    // RouterOutlet是由RouterModule提供的指令之一。 当我们在应用中导航时，路由器就把激活的组件显示在<router-outlet>里面。
})
export class AppComponent {
    title = '英雄之旅';
}
