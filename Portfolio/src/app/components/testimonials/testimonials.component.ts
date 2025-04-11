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
      roleKey: 'TESTIMONIALS.ITEMS.BORJA.ROLE'
    },
    {
      image: 'assets/defpic.webp',
      textKey: 'TESTIMONIALS.ITEMS.ALBERT.TEXT',
      name: 'Albert Einstein',
      roleKey: 'TESTIMONIALS.ITEMS.ALBERT.ROLE'
    },
    {
      image: 'assets/defpic.webp',
      textKey: 'TESTIMONIALS.ITEMS.ALBERT2.TEXT',
      name: 'Albert Einstein',
      roleKey: 'TESTIMONIALS.ITEMS.ALBERT2.ROLE'
    }
  ];
}
