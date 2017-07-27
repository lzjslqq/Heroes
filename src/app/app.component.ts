import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} 信息!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>
  <input  placeholder="输入英雄名称" [(ngModel)]='hero.name' />
  {{hero.name}}
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '英雄之旅';
  hero: Hero = { id: 1, name: '风暴' };
}
