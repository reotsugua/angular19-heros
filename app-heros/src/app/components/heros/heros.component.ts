import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Hero } from '../hero';

@Component({
  selector: 'toh-heros',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
  readonly baseUrl = "https://placehold.co/";
  
  hero: Hero = {
    id: 1,
    name: "Spider-Man",
    realName: 'Test city',
    image: `${this.baseUrl}/75x50?text=Spider+Man`,
  };

}
