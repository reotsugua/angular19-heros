import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../heros.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'toh-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  herosService: HerosService = inject(HerosService);
  location = inject(Location);
  hero: Hero | undefined;

  constructor(){
    const heroId: number = Number(this.route.snapshot.params['id']);
    this.hero = this.herosService.getHeroById(heroId);
    
  }

  goBack(){
    this.location.back();
  }
}
