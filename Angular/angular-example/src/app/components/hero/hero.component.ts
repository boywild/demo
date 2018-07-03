import { Component, OnInit } from '@angular/core';
import {Hero} from '../../type/hero';
import {HEROS} from '../../type/mock-hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heros:Hero[]=HEROS;
  constructor() { }

  ngOnInit() {
  }

}
