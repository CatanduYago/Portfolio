import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      key: 'VITALY',
      logo: 'assets/vitaly-logo.png'
    },
    {
      key: 'VKS',
      logo: 'assets/VKS-logo.png'
    },
    // Aqui puedo añadir otro objeto con el key y el logo correspondiente y en los archivos de lang
];

  ngOnInit(): void {
  }

  getDuration(start: Date): string {
    const now = new Date();
    let totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());

    // Ajuste: contar el mes actual si el día ya es igual o mayor
    if (now.getDate() >= start.getDate()) {
      totalMonths += 1;
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let durationStr = '';
    if (years > 0) {
      durationStr += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
      if (durationStr) {
        durationStr += ' and ';
      }
      durationStr += `${months}${months > 1 ? '' : ''}`;
    }
    return durationStr || '0';
  }
}

