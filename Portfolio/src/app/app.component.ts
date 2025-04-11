import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private translate: TranslateService) {
    // Definir los idiomas disponibles
    this.translate.addLangs(['en', 'es']);
    // Establecer un idioma por defecto
    this.translate.setDefaultLang('es');

  }
}
