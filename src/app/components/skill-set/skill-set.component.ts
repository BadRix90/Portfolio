import { Component, Input } from '@angular/core';
import { MyStackComponent } from './my-stack/my-stack.component';
import { TechShowcaseComponent } from './tech-showcase/tech-showcase.component';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [MyStackComponent, TechShowcaseComponent],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  @Input() currentLanguage = 'en';
}