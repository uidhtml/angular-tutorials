import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  listOfExamples = [
    {
      topic: 'LinkedSignal() API',
      link: '/linkedSignal',
    },
    {
      topic: 'Resource() API',
      link: '/resourceAPI',
    },
    {
      topic: 'httpResource() API',
      link: '/httpResourceAPI',
    },
  ];
}
