import { Injectable } from '@angular/core';
import { Hero } from './components/hero';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  readonly baseUrl = "https://placehold.co";
    
    protected herosList: Hero[] = [
      {
        id: 1,
        name: "Spider-Man",
        realName: "Peter Parker",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Sp+M`,
      },
      {
        id: 2,
        name: "Iron Man",
        realName: "Tony Stark",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Ir+M`,
      },
      {
        id: 3,
        name: "Captain America",
        realName: "Steve Rogers",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Ca+A`,
      },
      {
        id: 4,
        name: "Thor",
        realName: "Thor Odinson",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Thor`,
      }
    ];

    get allHeros(): Hero[] {
      return this.herosList;
    }

    getHeroById(id: number): Hero | undefined {
      return this.herosList.find(hero => hero.id === id);
    }

    get topThreeHeros(): Hero[]{
      return this.herosList.slice(0,3);
    }


}
