import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
