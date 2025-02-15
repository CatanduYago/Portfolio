import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  titleEs = 'Hola, soy Yago 👋';
  titleEn = "Hi, I'm Yago! 👋";
  
  descriptionEs = `Soy un estudiante de grado superior en desarrollo web con experiencia práctica en el desarrollo de aplicaciones web utilizando tecnologías como Angular y Node.js. Durante mis estudios, he trabajado con herramientas como PostgreSQL y MySQL. Aunque estoy en las etapas iniciales de mi carrera, me apasiona profundamente el desarrollo web y disfruto cada oportunidad para aprender y crecer en este campo.`;
  descriptionEn = `I am a higher education student in web development with practical experience in developing web applications using technologies like Angular and Node.js. During my studies, I have worked with tools like PostgreSQL and MySQL. Although I am in the early stages of my career, I am deeply passionate about web development and enjoy every opportunity to learn and grow in this field.`;

  locationEs = 'Badajoz, España';
  locationEn = 'Badajoz, Spain';

  statusEs = 'Estudiante';
  statusEn = 'Student';

  profileImage = 'assets/About-me.jpeg';
}
