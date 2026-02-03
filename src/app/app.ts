import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/components/layout/footer/footer.component";
import { NavbarComponent } from './core/components/layout/navbar/navbar.component';
import { NotfoundComponent } from "./features/componrnts/not-found/not-found.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('e-comm');
}
