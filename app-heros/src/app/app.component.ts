import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PageHeaderComponent],
  template: `<toh-page-header></toh-page-header><router-outlet />`
})
export class AppComponent {
}
