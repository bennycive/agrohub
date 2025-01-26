import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from "./preloader/preloader.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, PreloaderComponent]

})



export class AppComponent {
  title = 'agrohub';
}

