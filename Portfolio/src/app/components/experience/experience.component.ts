import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements OnInit {
  practiceCompany = 'Vitaly';
  startDate: Date = new Date('2025-01-01');
  duration: string = '';

  ngOnInit(): void {
    this.duration = this.getDuration(this.startDate);
  }

  getDuration(start: Date): string {
    const now = new Date();
    let totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    let durationStr = '';
    if (years > 0) {
      durationStr += `${years}`;
    }
    if (months > 0) {
      if (durationStr) { durationStr += ' and '; }
      durationStr += `${months}`;
    }
    return durationStr || '0';
  }
}

