import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentLanguage: string = 'es';
  languageIcon: string = 'assets/espana.png';

  constructor(private translate: TranslateService) {
    // Configurar el idioma por defecto y usarlo en el servicio de traducción
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  toggleLanguage(): void {
    // Cambiar entre 'es' y 'en' y actualizar el ícono de idioma
    if (this.currentLanguage === 'es') {
      this.currentLanguage = 'en';
      this.languageIcon = 'assets/eeuu.png';
    } else {
      this.currentLanguage = 'es';
      this.languageIcon = 'assets/espana.png';
    }
    // Activar el idioma seleccionado en el servicio
    this.translate.use(this.currentLanguage);
  }

  downloadFile(): void {
    // Seleccionar el archivo correcto en función del idioma actual
    const fileName = this.currentLanguage === 'es'
      ? 'Yago_CV.pdf'
      : 'Yago_CV_en.pdf';

    const link = document.createElement('a');
    link.href = `assets/${fileName}`;
    link.download = this.currentLanguage === 'es'
      ? 'Yago_Catalano_Andújar_CV.pdf'
      : 'Yago_Catalano_Andujar_CV.pdf';
    link.click();
  }

}
