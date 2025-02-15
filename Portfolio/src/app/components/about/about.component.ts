import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  titleEs = 'Sobre mí';
  titleEn = 'About Me';

  aboutTextEs = `Soy un desarrollador web apasionado con experiencia en diversas tecnologías. Me gusta enfrentar desafíos y mejorar mis habilidades día a día.`;
  aboutTextEn = `I am a passionate web developer with experience in various technologies. I enjoy facing challenges and improving my skills day by day.`;

  additionalEs = `He trabajado en varios proyectos donde he podido desarrollar tanto habilidades técnicas como habilidades personales. Algunas de mis habilidades más destacadas son:`;
  additionalEn = `I have worked on several projects where I have been able to develop both technical and personal skills. Some of my most notable skills are:`;

  softSkillsEs: string[] = [
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Resolución de problemas',
    'Trabajo bajo presión',
    'Adaptabilidad',
    'Proactividad',
    'Análisis de resultados'
  ];
  softSkillsEn: string[] = [
    'Teamwork',
    'Effective communication',
    'Problem solving',
    'Under pressure work',
    'Adaptability',
    'Proactivity',
    'Results analysis'
  ];

  aboutImage = 'assets/perfil.jpg';
}
