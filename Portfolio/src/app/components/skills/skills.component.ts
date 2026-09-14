import { Component } from '@angular/core';

interface Skill {
  image: string;
  key: string;
}

interface SkillGroup {
  titleKey: string;
  items: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      titleKey: 'SKILLS.GROUPS.BACKEND',
      items: [
        { image: 'assets/Nodejs.png', key: 'SKILLS.ITEMS.NODEJS' },
        { image: 'assets/java.png', key: 'SKILLS.ITEMS.JAVA' },
        { image: 'assets/SpringBoot.png', key: 'SKILLS.ITEMS.SPRING_BOOT' },
        { image: 'assets/nestjs.png', key: 'SKILLS.ITEMS.NESTJS' },
        { image: 'assets/jsp.png', key: 'SKILLS.ITEMS.JSP' },
      ],
    },
    {
      titleKey: 'SKILLS.GROUPS.DATABASES',
      items: [
        { image: 'assets/oracle_database.png', key: 'SKILLS.ITEMS.ORACLE_DATABASE' },
        { image: 'assets/postgresql.png', key: 'SKILLS.ITEMS.POSTGRESQL' },
        { image: 'assets/my_sql.png', key: 'SKILLS.ITEMS.MYSQL' },
      ],
    },
    {
      titleKey: 'SKILLS.GROUPS.FRONTEND',
      items: [
        { image: 'assets/Angular.png', key: 'SKILLS.ITEMS.ANGULAR' },
        { image: 'assets/Java_script.png', key: 'SKILLS.ITEMS.JAVASCRIPT' },
        { image: 'assets/hmtl5.png', key: 'SKILLS.ITEMS.HTML' },
        { image: 'assets/css.png', key: 'SKILLS.ITEMS.CSS' },
        { image: 'assets/Bootstrap.png', key: 'SKILLS.ITEMS.BOOTSTRAP' },
        { image: 'assets/Figma.png', key: 'SKILLS.ITEMS.FIGMA' },
      ],
    },
    {
      titleKey: 'SKILLS.GROUPS.TOOLING',
      items: [
        { image: 'assets/Git.png', key: 'SKILLS.ITEMS.GIT' },
        { image: 'assets/Docker.png', key: 'SKILLS.ITEMS.DOCKER' },
        { image: 'assets/Vagrant.png', key: 'SKILLS.ITEMS.VAGRANT' },
      ],
    },
  ];

  /**
   * Skills that have no icon in /assets — rendered as text chips so the list
   * stays honest without needing new logo files.
   */
  otherSkills: string[] = [
    'TypeScript',
    'REST APIs',
    'JPA / JPQL',
    'Swagger',
    'SQL (DDL, procedures, triggers)',
    'AWS S3',
    'Amazon Transcribe',
    'Jira',
    'Agile',
    'Arduino',
    'MongoDB',
    'Robotics',
  ];
}
