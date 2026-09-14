import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
})
export class AchievementsComponent {
  /** Awards, education and certifications, newest first. */
  items: string[] = [
    'SPAINSKILLS',
    'EXTREMADURA_SKILLS',
    'CTF',
    'DAW',
    'BACHILLERATO',
    'ENGLISH',
  ];
}
