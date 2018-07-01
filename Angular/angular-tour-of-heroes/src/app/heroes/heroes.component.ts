import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros:Hero[];

  constructor(private heroService:HeroService) { 
  }

  getHeroes():void{
   this.heroService.getHeroes().subscribe(heros=>this.heros=heros);
  }
  ngOnInit() {
    this.getHeroes();
  }

}
