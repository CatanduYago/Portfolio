import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'en' | 'es';

const STORAGE_KEY = 'portfolio.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  /** English is the default language of the site. */
  readonly defaultLanguage: AppLanguage = 'en';
  readonly available: AppLanguage[] = ['en', 'es'];

  current: AppLanguage = this.defaultLanguage;

  constructor(private translate: TranslateService) {}

  /** Called once from AppComponent. */
  init(): void {
    this.translate.addLangs(this.available);
    this.translate.setDefaultLang(this.defaultLanguage);
    this.use(this.readStoredLanguage() ?? this.defaultLanguage);
  }

  use(lang: AppLanguage): void {
    this.current = lang;
    this.translate.use(lang);
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage may be unavailable (private mode) — ignore */
    }
  }

  toggle(): void {
    this.use(this.current === 'en' ? 'es' : 'en');
  }

  get flagIcon(): string {
    return this.current === 'en' ? 'assets/eeuu.png' : 'assets/espana.png';
  }

  private readStoredLanguage(): AppLanguage | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'en' || stored === 'es' ? stored : null;
    } catch {
      return null;
    }
  }
}
