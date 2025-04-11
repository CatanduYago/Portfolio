import {Component} from "@angular/core";

interface Project {
  key: string; // Nueva propiedad para la clave en el JSON
  link: string;
  image?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  // Se eliminan las variables workTitleEs y workTitleEn, se usa la traducción con 'WORK.TITLE'
  projects: Project[] = [
    {
      key: 'SUBTITLER',
      link: 'https://catanduyago.github.io/Subtitler/',
      image: 'assets/subtitler.png'
    },
    {
      key: 'WISHLIST',
      link: 'https://catanduyago.github.io/wishlist',
      image: 'assets/wishlist.png'
    },
    {
      key: 'MAZAOGYM',
      link: 'https://github.com/CatanduYago/MazaoGym',
      image: 'assets/mazaogym.png'
    },
    {
      key: 'DUNGEON',
      link: 'https://github.com/CatanduYago/Mazmorras-en-Java'
    },
    {
      key: 'PORTFOLIO',
      link: 'https://CatanduYago.github.io'
    }
  ];
}
