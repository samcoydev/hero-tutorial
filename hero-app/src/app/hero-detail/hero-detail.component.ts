import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // Type Button --
  onClickMe(selectedtype: "herotype") {
    this.hero.type = selectedtype;
  }
}
