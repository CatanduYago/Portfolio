import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(private language: LanguageService) {}

  ngOnInit(): void {
    // Default language is English; a stored preference wins if present.
    this.language.init();
  }
}
