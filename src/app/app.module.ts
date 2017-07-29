import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // Path: 路由器会用它来匹配浏览器地址栏中的地址，如heroes。
    // Component: 导航到此路由时，路由器需要创建的组件（HeroesComponent）。
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //   { path: 'heroes', component: HeroesComponent },
    //   { path: 'dashboard', component: DashboardComponent },
    //   // 路径中的冒号 (:) 表示:id是一个占位符，当导航到这个HeroDetailComponent组件时，它将被填入一个特定英雄的id
    //   { path: 'detail/:id', component: HeroDetailComponent }
    // ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
