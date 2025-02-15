import { Component } from '@angular/core';

interface Testimonial {
  image: string;
  textEs: string;
  textEn: string;
  name: string;
  roleEs: string;
  roleEn: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  titleEs = 'Testimonios';
  titleEn = 'Testimonials';

  descriptionEs = 'Personas que hablan bien de mí:';
  descriptionEn = 'People that talk great about me:';

  testimonials: Testimonial[] = [
    {
      image: 'assets/borja.jpg',
      textEs: `"Un compañero excepcional, estudiante de desarrollo web con un gran talento. Siempre atento y con una increíble capacidad para captar incluso los conceptos más complejos. Su habilidad para resolver problemas técnicos es impresionante, y su dedicación lo convierte en una pieza clave en cualquier equipo. Inteligente, proactivo y con una actitud positiva. ¡Totalmente recomendable!"`,
      textEn: `"An exceptional teammate, a web development student with great talent. Always attentive and with an incredible ability to grasp even the most complex concepts. His skill in solving technical problems is impressive, and his dedication makes him a key asset in any team. Intelligent, proactive, and with a positive attitude. Highly recommended!"`,
      name: 'Borja Delgado Sánchez',
      roleEs: 'Compañero de clase',
      roleEn: 'Classmate'
    },
    {
      image: 'assets/defpic.webp',
      textEs: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt risus a blandit tristique. Duis pretium eu libero ut lacinia. Phasellus eget rhoncus mi."`,
      textEn: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt risus a blandit tristique. Duis pretium eu libero ut lacinia. Phasellus eget rhoncus mi."`,
      name: 'Albert Einstein',
      roleEs: 'BBC CEO',
      roleEn: 'BBC CEO'
    },
    {
      image: 'assets/defpic.webp',
      textEs: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt risus a blandit tristique. Duis pretium eu libero ut lacinia. Phasellus eget rhoncus mi."`,
      textEn: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt risus a blandit tristique. Duis pretium eu libero ut lacinia. Phasellus eget rhoncus mi."`,
      name: 'Albert Einstein',
      roleEs: 'BBC CEO',
      roleEn: 'BBC CEO'
    }
  ];
}
