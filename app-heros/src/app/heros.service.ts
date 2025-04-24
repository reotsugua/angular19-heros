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
      },
      {
        id: 5,
        name: "Black Widow",
        realName: "Natasha Romanoff",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Bl+W`,
      },
      {
        id: 6,
        name: "Hulk",
        realName: "Bruce Banner",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Hulk`,
      },
      {
        id: 7,
        name: "Hawkeye",
        realName: "Clint Barton",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Hawk`,
      },
      {
        id: 8,
        name: "Doctor Strange",
        realName: "Stephen Strange",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Dr+S`,
      },
      {
        id: 9,
        name: "Scarlet Witch",
        realName: "Wanda Maximoff",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=Sc+W`,
      },
      {
        id: 10,
        name: "Black Panther",
        realName: "T'Challa",
        team: "Avengers",
        image: `${this.baseUrl}/75x75?text=BP`,
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
