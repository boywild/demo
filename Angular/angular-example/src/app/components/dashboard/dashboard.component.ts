import { Component, OnInit } from '@angular/core';
import { Hero } from '../../type/hero';
import { HEROS } from '../../type/mock-hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHero: Hero[] = HEROS.slice(0, 4);
  constructor() { }

  ngOnInit() {
  }

}
