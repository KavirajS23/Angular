import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedEntity: string;
  title = 'my-app';

  entityClicked(event) {
    this.selectedEntity = event;
  }
}
