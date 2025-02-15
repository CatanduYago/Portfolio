import { Component } from '@angular/core';

interface Project {
  titleEs: string;
  titleEn: string;
  link: string;
  descriptionEs: string;
  descriptionEn: string;
  image?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  workTitleEs = 'Trabajo';
  workTitleEn = 'Work';
  
  workDescEs = 'Algunos de los proyectos que he hecho:';
  workDescEn = 'This are some of the projects I have built:';

  projects: Project[] = [
    {
      titleEs: 'Subtitler',
      titleEn: 'Subtitler',
      link: 'https://catanduyago.github.io/Subtitler/',
      descriptionEs: `Aplicación web de transcripción de voz en tiempo real. Permite capturar audio desde el micrófono y mostrar subtítulos instantáneamente. Desarrollada con JavaScript y Bootstrap.`,
      descriptionEn: `A web application for real-time voice transcription. Captures audio from the microphone and displays subtitles instantly. Developed with JavaScript and Bootstrap.`,
      image: 'assets/subtitler.png'
    },
    {
      titleEs: 'Lista de deseados',
      titleEn: 'Wish list',
      link: 'https://catanduyago.github.io/wishlist',
      descriptionEs: `Lista de deseos responsive con filtros hecha usando Angular y Bootstrap.`,
      descriptionEn: `Responsive wishlist website with filters made using Angular and Bootstrap.`,
      image: 'assets/wishlist.png'
    },
    {
      titleEs: 'MazaoGym',
      titleEn: 'MazaoGym',
      link: 'https://github.com/CatanduYago/MazaoGym',
      descriptionEs: `Proyecto de Gimnasio realizado para el final de una de las asignaturas de 1º de DAW usando PHP.`,
      descriptionEn: `Gym project completed for the end of one of the first-year DAW courses using PHP.`,
      image: 'assets/mazaogym.png'
    },
    {
      titleEs: 'Juego de mazmorras en Java',
      titleEn: 'Dungeon game in Java',
      link: 'https://github.com/CatanduYago/Mazmorras-en-Java',
      descriptionEs: `Juego de mazmorras programado en Java usando JavaFX. Proyecto fin de curso de programación.`,
      descriptionEn: `Dungeon game programmed in Java using JavaFX. End-of-course programming project.`
    },
    {
      titleEs: 'CatanduYago.github.io',
      titleEn: 'CatanduYago.github.io',
      link: 'https://CatanduYago.github.io',
      descriptionEs: `Este es mi repositorio de github pages en el que despliego la mayoría de mis proyectos.`,
      descriptionEn: `This is my Github pages repository where I deploy most of my apps.`
    }
  ];
}
