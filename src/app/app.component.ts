import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTestApp';
  public Add(i:number, j:number)
  {
    return i+j;
  }
  
}
