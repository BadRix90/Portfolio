// about-me.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoStickersComponent } from './info-stickers/info-stickers.component';
import { AboutTextComponent } from './about-text/about-text.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, InfoStickersComponent, AboutTextComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}