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
      altKey: 'SOCIAL.GITHUB'
    },
    {
      url: 'https://x.com/Ycatalanoa',
      image: 'assets/x.png',
      altKey: 'SOCIAL.TWITTER'
    },
    {
      url: 'https://www.linkedin.com/in/yago-catalano-andújar-24216828a',
      image: 'assets/linkedin.png',
      altKey: 'SOCIAL.LINKEDIN'
    }
  ];
}
