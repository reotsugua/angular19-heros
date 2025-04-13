import { Component } from "@angular/core";
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'toh-page-header',
    standalone: true,
    imports: [RouterModule, MatButtonModule, MatIconModule],
    templateUrl: './page-header.component.html',
    styleUrl: './page-header.component.css'
})

export class PageHeaderComponent {
    
}

