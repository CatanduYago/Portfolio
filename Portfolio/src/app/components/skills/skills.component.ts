import { Component } from '@angular/core';

interface Skill {
  image: string;
  nameEs: string;
  nameEn: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  titleEs = 'Skills';
  titleEn = 'Skills';

  descriptionEs = 'Estas son algunas de las habilidades que he adquirido durante mi curso:';
  descriptionEn = 'These are some of the skills I have acquired during my career:';

  skills: Skill[] = [
    { image: 'assets/oracle_database.png', nameEs: 'Oracle database', nameEn: 'Oracle database' },
    { image: 'assets/postgresql.png', nameEs: 'PostgreSQL', nameEn: 'PostgreSQL' },
    { image: 'assets/my_sql.png', nameEs: 'MySQL', nameEn: 'MySQL' },
    { image: 'assets/Angular.png', nameEs: 'Angular', nameEn: 'Angular' },
    { image: 'assets/Laravel.png', nameEs: 'Laravel', nameEn: 'Laravel' },
    { image: 'assets/Nodejs.png', nameEs: 'Node.js', nameEn: 'Node.js' },
    { image: 'assets/Bootstrap.png', nameEs: 'Bootstrap', nameEn: 'Bootstrap' },
    { image: 'assets/SpringBoot.png', nameEs: 'Spring Boot', nameEn: 'Spring Boot' },
    { image: 'assets/php.png', nameEs: 'PHP', nameEn: 'PHP' },
    { image: 'assets/java.png', nameEs: 'Java', nameEn: 'Java' },
    { image: 'assets/Java_script.png', nameEs: 'Java Script', nameEn: 'Java Script' },
    { image: 'assets/hmtl5.png', nameEs: 'HTML', nameEn: 'HTML' },
    { image: 'assets/css.png', nameEs: 'CSS', nameEn: 'CSS' },
    { image: 'assets/Git.png', nameEs: 'Git', nameEn: 'Git' },
    { image: 'assets/Docker.png', nameEs: 'Docker', nameEn: 'Docker' },
    { image: 'assets/Vagrant.png', nameEs: 'Vagrant', nameEn: 'Vagrant' },
    { image: 'assets/Figma.png', nameEs: 'Figma', nameEn: 'Figma' }
  ];
}
