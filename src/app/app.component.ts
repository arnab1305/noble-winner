import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noble-winner';
  public activePillIndex:number = 3;
  constructor(private http: HttpClient) { }
  routerArray = [

    {
      name: 'Single Award Winner',
      path: 'single-owner'

    },
    {
      name: 'Multiple Award Winner',
      path: 'multiple-owner'

    }

  ];


  public selectPill(index:number) {
    this.activePillIndex = index;
   }

}
