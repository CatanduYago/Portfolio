import { Component } from '@angular/core';

interface SocialLink {
  url: string;
  image: string;
  altKey: string;
}

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
})
export class SocialLinksComponent {
  links: SocialLink[] = [
    {
      url: 'https://github.com/CatanduYago',
      image: 'assets/github.png',
      altKey: 'SOCIAL.GITHUB',
    },
    {
      url: 'https://www.linkedin.com/in/yagocatalanoandujar/',
      image: 'assets/linkedin.png',
      altKey: 'SOCIAL.LINKEDIN',
    },
    {
      url: 'https://x.com/Ycatalanoa',
      image: 'assets/x.png',
      altKey: 'SOCIAL.TWITTER',
    },
  ];
}
