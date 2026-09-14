import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Experience {
  key: string;
  /** Logo path, or null to render the monogram fallback. */
  logo: string | null;
  monogram?: string;
  start: Date;
  /** Undefined means the role is ongoing. */
  end?: Date;
  current?: boolean;
  tech: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  /** Newest first. Dates drive the auto-calculated durations. */
  experiences: Experience[] = [
    {
      key: 'SILICE',
      logo: 'assets/silice-logo.jpg',
      monogram: 'SILICE',
      start: new Date(2026, 4, 1), // May 2026
      current: true,
      tech: ['NestJS', 'Java', 'REST APIs', 'SQL', 'Git', 'Jira', 'Angular'],
    },
    {
      key: 'VKS',
      logo: 'assets/VKS-logo.png',
      start: new Date(2025, 5, 1), // June 2025
      end: new Date(2026, 2, 1), // March 2026
      tech: ['Angular', 'TypeScript', 'Figma', 'Responsive design', 'SCSS'],
    },
    {
      key: 'VITALY',
      logo: 'assets/vitaly-logo.png',
      start: new Date(2025, 0, 1), // January 2025
      end: new Date(2025, 5, 1), // June 2025
      tech: [
        'Spring Boot',
        'Angular',
        'Oracle Database',
        'JPA / JPQL',
        'Swagger',
        'JSP',
      ],
    },
  ];

  constructor(private language: LanguageService) {}

  /** "1 yr 4 mos" / "1 a 4 m", recalculated on every render for ongoing roles. */
  duration(exp: Experience): string {
    const months = this.durationMonths(exp);
    return this.formatDuration(months);
  }

  /** Combined experience time, preserving the duration convention of each role. */
  totalDuration(): string {
    const months = this.experiences.reduce(
      (total, experience) => total + this.durationMonths(experience),
      0,
    );
    return this.formatDuration(months);
  }

  private durationMonths(exp: Experience): number {
    const end = exp.end ?? new Date();
    let months =
      (end.getFullYear() - exp.start.getFullYear()) * 12 +
      (end.getMonth() - exp.start.getMonth()) +
      1;
    if (months < 1) {
      months = 1;
    }
    return months;
  }

  private formatDuration(months: number): string {
    const years = Math.floor(months / 12);
    const rest = months % 12;
    const es = this.language.current === 'es';

    const parts: string[] = [];
    if (years > 0) {
      parts.push(es ? `${years} ${years === 1 ? 'año' : 'años'}` : `${years} yr${years === 1 ? '' : 's'}`);
    }
    if (rest > 0) {
      parts.push(es ? `${rest} ${rest === 1 ? 'mes' : 'meses'}` : `${rest} mo${rest === 1 ? '' : 's'}`);
    }
    return parts.join(' ');
  }
}
