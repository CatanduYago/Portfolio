import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  scrolled = false;

  constructor(public language: LanguageService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;
  }

  toggleLanguage(): void {
    this.language.toggle();
  }

  downloadFile(): void {
    const isSpanish = this.language.current === 'es';
    const link = document.createElement('a');
    link.href = `assets/${isSpanish ? 'Yago_CV.pdf' : 'Yago_CV_en.pdf'}`;
    link.download = isSpanish
      ? 'Yago_Catalano_Andujar_CV_ES.pdf'
      : 'Yago_Catalano_Andujar_CV_EN.pdf';
    link.click();
  }
}
