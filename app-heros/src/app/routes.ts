import { Routes } from '@angular/router';
import { TopHerosComponent } from './components/top-heros/top-heros.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: TopHerosComponent,
        title: 'Dashboard',
    },
    {
        path: 'heros',
        title: 'Heros',
        loadComponent: () => import('./components/heros/heros.component').then(m => m.HerosComponent)
    },
    {
        path: 'details',
        component: DetailsComponent,
        title: 'Hero details',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    }
];
