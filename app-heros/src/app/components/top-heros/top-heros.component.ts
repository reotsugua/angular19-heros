import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Hero } from '../hero';
import { HerosService } from '../../heros.service';

@Component({
  selector: 'toh-top-heros',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './top-heros.component.html',
  styleUrl: './top-heros.component.css'
})
export class TopHerosComponent {
  topThreeHeros: Hero[] = [];
  herosService: HerosService = inject(HerosService);

  constructor() {
    this.topThreeHeros = this.herosService.topThreeHeros;
  }

}

