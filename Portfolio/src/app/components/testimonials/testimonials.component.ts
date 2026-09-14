import { Component } from '@angular/core';

interface Testimonial {
  image: string;
  textKey: string;
  name: string;
  roleKey: string;
  profile: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      image: 'assets/borja.jpg',
      textKey: 'TESTIMONIALS.ITEMS.BORJA.TEXT',
      name: 'Borja Delgado Sánchez',
      roleKey: 'TESTIMONIALS.ITEMS.BORJA.ROLE',
      profile: 'https://www.linkedin.com/in/borja-delgado-sanchez-5298a7209/',
    },
  ];

  get testimonialsColumns(): number {
    return Math.min(3, this.testimonials.length || 1);
  }
}
