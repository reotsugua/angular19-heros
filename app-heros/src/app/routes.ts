import { Routes } from '@angular/router';
import { TopHerosComponent } from './components/top-heros/top-heros.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: TopHerosComponent,
        title: 'Dashboard',
    },
    // {
    //     path: 'details',
    //     component: DetailsComponent,
    //     title: 'Hero details',
    // },
    {
        path: 'details',
        title: 'Hero details',
        loadComponent: () => import('./components/details/details.component').then(m => m.DetailsComponent)
    },
    // {
    //     path: 'details/:id',
    //     component: DetailsComponent,
    //     title: 'Home details',
    // }
];
