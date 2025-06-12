import { Component } from '@angular/core';

interface Testimonial {
  image: string;
  textKey: string;
  name: string;
  roleKey: string;
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
    },
  ];

  get testimonialsColumns(): number {
    const count = this.testimonials.length;
    if (count === 1) return 1;
    if (count === 2) return 2;
    if (count === 4) return 2;
    return Math.min(3, count);
  }
}
