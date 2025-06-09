import { Component } from '@angular/core';

interface Skill {
  image: string;
  key: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skills: Skill[] = [
    { image: 'assets/oracle_database.png', key: 'SKILLS.ITEMS.ORACLE_DATABASE' },
    { image: 'assets/postgresql.png', key: 'SKILLS.ITEMS.POSTGRESQL' },
    { image: 'assets/my_sql.png', key: 'SKILLS.ITEMS.MYSQL' },
    { image: 'assets/Angular.png', key: 'SKILLS.ITEMS.ANGULAR' },
    { image: 'assets/Nodejs.png', key: 'SKILLS.ITEMS.NODEJS' },
    { image: 'assets/Bootstrap.png', key: 'SKILLS.ITEMS.BOOTSTRAP' },
    { image: 'assets/SpringBoot.png', key: 'SKILLS.ITEMS.SPRING_BOOT' },
    { image: 'assets/java.png', key: 'SKILLS.ITEMS.JAVA' },
    { image: 'assets/Java_script.png', key: 'SKILLS.ITEMS.JAVASCRIPT' },
    { image: 'assets/hmtl5.png', key: 'SKILLS.ITEMS.HTML' },
    { image: 'assets/css.png', key: 'SKILLS.ITEMS.CSS' },
    { image: 'assets/Git.png', key: 'SKILLS.ITEMS.GIT' },
    { image: 'assets/Docker.png', key: 'SKILLS.ITEMS.DOCKER' },
    { image: 'assets/jsp.png', key: 'SKILLS.ITEMS.JSP' }
  ];
}
