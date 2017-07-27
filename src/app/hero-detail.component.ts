import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} 详情!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
    @Input() hero: Hero = { id: 1, name: 'dwewe' };
}

