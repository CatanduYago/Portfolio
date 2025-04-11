import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  aboutImage = 'assets/perfil.jpg';
  softSkills: string[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('ABOUT.SOFT_SKILLS').subscribe((skills: string[]) => {
      this.softSkills = skills;
    });
  }
}
