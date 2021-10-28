import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message_bar="Tec_Web";
  title = 'Brewery';
  message = 'Hello, World!';
  year = new Date().getFullYear();

}
