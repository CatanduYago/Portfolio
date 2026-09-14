import { Component } from '@angular/core';

interface Project {
  key: string;
  link: string;
  image?: string;
  tech: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      key: 'SUBTITLER',
      link: 'https://github.com/CatanduYago/Subtitler-Live',
      image: 'assets/subtitler.png',
      tech: ['JavaScript', 'Amazon Transcribe', 'AWS S3', 'HTML', 'CSS'],
    },
    {
      key: 'VKS',
      link: 'https://valkiriaesports.com/',
      image: 'assets/VKS.png',
      tech: ['Angular', 'Figma', 'Spring Boot', 'PostgreSQL', 'WIX'],
    },
    {
      key: 'WISHLIST',
      link: 'https://catanduyago.github.io/wishlist',
      image: 'assets/wishlist.png',
      tech: ['Angular', 'Bootstrap', 'TypeScript'],
    },
    {
      key: 'MAZAOGYM',
      link: 'https://github.com/CatanduYago/MazaoGym',
      image: 'assets/mazaogym.png',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    },
    {
      key: 'DUNGEON',
      link: 'https://github.com/CatanduYago/Mazmorras-en-Java',
      tech: ['Java', 'JavaFX'],
    },
    {
      key: 'PORTFOLIO',
      link: 'https://CatanduYago.github.io',
      tech: ['Angular', 'ngx-translate', 'GitHub Pages'],
    },
  ];
}
