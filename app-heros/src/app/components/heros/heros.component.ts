import { Component, inject } from '@angular/core';
import { RouterModule } from "@angular/router";
import {MatListModule} from '@angular/material/list';
import { Hero } from '../hero';
import { HerosService } from '../../heros.service';


@Component({
  selector: 'toh-heros',
  standalone: true,
  imports: [RouterModule, MatListModule],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {  
  heros: Hero[] = [];
  herosService: HerosService = inject(HerosService);

  constructor() {
    this.heros = this.herosService.allHeros;
  }
  

}
