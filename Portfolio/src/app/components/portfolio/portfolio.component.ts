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
  projects: Project[] = [
    {
      key: 'SUBTITLER',
      link: 'https://transcribe.catanduyago.duckdns.org/',
      image: 'assets/subtitler.png'
    },
    {
      key: "VKS",
      link:'https://www.figma.com/proto/pUE60ncskmy3hIrRLjHur8/VKS-Landing-Page?node-id=2-3&p=f&t=F75s1ql5hbDQ2cIZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      image: 'assets/VKS.png'
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
