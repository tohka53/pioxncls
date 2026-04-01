import { Component, HostListener } from '@angular/core';

type Language = 'es' | 'en';

interface Translations {
  nav: {
    home: string;
    services: string;
    cleaning: string;
    laundry: string;
    about: string;
    products: string;
    contact: string;
  };
  hero: {
    title1: string;
    titleAccent: string;
    tagline: string;
    subtitle: string;
    hsi1: string;
    hsi2: string;
    hsi3: string;
    startingAt: string;
    cta1: string;
    cta2: string;
    scrollIndicator: string;
    offerEyebrow: string;
    offerUnit: string;
    offerOnly: string;
    offerDelivery: string;
    card1Title: string;
    card1f1: string;
    card1f2: string;
    card1f3: string;
    card1Price: string;
    card2Title: string;
    card2f1: string;
    card2f2: string;
    card2f3: string;
    card2Price: string;
    promo: string;
    promoCta: string;
    quoteBar: string;
  };
  trust: {
    insured: string;
    eco: string;
    satisfaction: string;
    minority: string;
  };
  features: {
    organic: string;
    residential: string;
    laundry: string;
    eco: string;
  };
  services: {
    tag: string;
    title1: string;
    title2: string;
    subtitle: string;
    flyerHouseTitle: string;
    flyerLaundryTitle: string;
    bookCta: string;
    quoteCta: string;
    residential: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      price: string;
    };
    deep: {
      badge: string;
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      price: string;
    };
    laundry: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      price: string;
    };
    commercial: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      price: string;
    };
  };
  about: {
    tag: string;
    title1: string;
    title2: string;
    founderName: string;
    founderTitle: string;
    badge: string;
    text1: string;
    text2: string;
    text3: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
  };
  products: {
    tag: string;
    title1: string;
    title2: string;
    subtitle: string;
    lavender: { name: string; desc: string };
    citrus:   { name: string; desc: string };
    vinegar:  { name: string; desc: string };
    baking:   { name: string; desc: string };
    flower:   { name: string; desc: string };
    ecoTitle: string;
    ecoText: string;
  };
  testimonials: {
    tag: string;
    title1: string;
    title2: string;
    testimonial1: { text: string; name: string; location: string };
    testimonial2: { text: string; name: string; location: string };
    testimonial3: { text: string; name: string; location: string };
    testimonial4: { text: string; name: string; location: string };
    testimonial5: { text: string; name: string; location: string };
  };
  split: {
    cleaning: {
      tag: string; title: string; lead: string;
      f1: string; f2: string; f3: string; f4: string;
      price: string; cta: string; badgeTitle: string; badgeSub: string;
    };
    laundry: {
      tag: string; title: string; lead: string;
      f1: string; f2: string; f3: string; f4: string;
      price: string; cta: string;
    };
    eco: {
      tag: string; title: string; lead: string;
      f1: string; f2: string; f3: string;
      save: string; cta: string; badgeTitle: string; badgeSub: string;
    };
  };
  boston: {
    tag: string;
    title: string;
    sub: string;
    save: string;
    callLabel: string;
    note: string;
  };
  contact: {
    tag: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      serviceOpt1: string;
      serviceOpt2: string;
      serviceOpt3: string;
      serviceOpt4: string;
      serviceOpt5: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  footer: {
    tagline: string;
    slogan: string;
    servicesTitle: string;
    companyTitle: string;
    contactTitle: string;
    ourStory: string;
    ingredients: string;
    copyright: string;
    eco: string;
    insured: string;
    minority: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = 'PIOX & L Natural Cleaning';
  isScrolled = false;
  menuOpen = false;
  currentLang: Language = 'en';

  // ── FormSubmit state ──────────────────────────
  formSubmitting = false;
  formSent       = false;
  formError      = false;

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    this.formSubmitting = true;
    this.formError      = false;

    try {
      const data = new FormData(form);

      const response = await fetch('https://formsubmit.co/ajax/pioxnaturalcleaning@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });

      if (response.ok) {
        this.formSent = true;
        form.reset();
      } else {
        this.formError = true;
      }
    } catch {
      this.formError = true;
    } finally {
      this.formSubmitting = false;
    }
  }
  // ─────────────────────────────────────────────

translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      cleaning: 'Limpieza',
      laundry: 'Lavandería',
      about: 'Nosotros',
      products: 'Productos',
      contact: 'Contacto'
    },

    hero: {
      title1: 'Servicios de Lavandería y',
      titleAccent: 'Limpieza Natural',
      tagline: 'Servicios ecológicos de limpieza y lavandería',
      subtitle:
        'La mayoría de los hogares lava entre 9 y 18 kg de ropa cada semana. Nosotros la recogemos, la lavamos con productos 100% naturales y la entregamos fresca y perfectamente limpia. También ofrecemos limpieza profesional de hogares y apartamentos en Boston, Newton y Cambridge.',
      hsi1: 'Limpieza de apartamentos',
      hsi2: 'Lavado · Secado · Doblado',
      hsi3: 'Recogida y entrega gratis',
      startingAt: 'Desde $120',
      cta1: '📞 Llamar o escribir',
      cta2: 'Ver servicios',
      scrollIndicator: 'Descubre más',
      offerEyebrow: 'Oferta especial',
      offerUnit: 'Bolsas de lavandería',
      offerOnly: 'Solo',
      offerDelivery: '¡Con entrega incluida!',
      card1Title: 'Limpieza del hogar',
      card1f1: 'Limpieza regular y profunda',
      card1f2: 'Move-In / Move-Out',
      card1f3: 'Productos naturales',
      card1Price: 'Desde $120',
      card2Title: 'Wash & Fold Express',
      card2f1: 'Entrega en 24 a 48 horas',
      card2f2: 'Doblado profesional',
      card2f3: 'Seguro para telas delicadas',
      card2Price: '$3.00/lb',
      promo: '🎉 ¡20% de descuento en tu primer servicio!',
      promoCta: 'Solicitar oferta',
      quoteBar: '¡Llama o escribe para una cotización gratis!'
    },

    trust: {
      insured: 'Totalmente asegurado',
      eco: 'Productos ecológicos',
      satisfaction: 'Satisfacción garantizada',
      minority: 'Empresa de propiedad minoritaria'
    },

    features: {
      organic: 'Productos naturales',
      residential: 'Limpieza residencial',
      laundry: 'Lavandería a domicilio',
      eco: 'Eco-friendly'
    },

    services: {
      tag: 'Nuestros servicios',
      title1: 'Lavandería y limpieza',
      title2: 'natural',
      subtitle:
        'Servicio profesional de lavandería con recogida y entrega, además de limpieza residencial usando únicamente productos naturales.',
      flyerHouseTitle: 'Limpieza del hogar',
      flyerLaundryTitle: 'Servicio de lavandería',
      bookCta: '📞 Programar limpieza',
      quoteCta: '🌿 Cotización gratis',

      residential: {
        title: 'Limpieza residencial',
        description:
          'Limpieza profesional de hogares y apartamentos utilizando productos naturales seguros.',
        feature1: 'Limpieza regular y profunda',
        feature2: 'Move-in / Move-out',
        feature3: 'Productos 100% naturales',
        price: 'Desde $120'
      },

      deep: {
        badge: 'Más popular',
        title: 'Wash & Fold Express',
        description:
          'Servicio ideal para profesionales y estudiantes ocupados, con entrega rápida garantizada.',
        feature1: 'Entrega en 24 a 48 horas',
        feature2: 'Doblado profesional',
        feature3: 'Cuidado de telas delicadas',
        price: '$3.00/lb'
      },

      laundry: {
        title: 'Lavandería a domicilio',
        description:
          'Recogemos tu ropa, la lavamos con jabones naturales y la entregamos fresca y limpia.',
        feature1: 'Recogida y entrega gratis',
        feature2: 'Lavado con productos naturales',
        feature3: 'Opciones con o sin fragancia',
        price: '$2.00/lb'
      },

      commercial: {
        title: 'Paquete de suscripción',
        description:
          'Servicio completo semanal de limpieza y lavandería para mayor comodidad.',
        feature1: '🏠 Limpieza semanal',
        feature2: '🧺 Ropa clara, oscura y ropa de cama',
        feature3: '🚗 Recogida y entrega incluidas',
        price: 'Cotización'
      }
    },

    about: {
      tag: 'Nuestra historia',
      title1: 'Inspirados en',
      title2: 'tradiciones mayas',
      founderName: 'Olga Piox',
      founderTitle: 'Fundadora',
      badge: 'Tradición natural',
      text1:
        'Mi nombre es <strong>Olga Piox</strong>. Soy originaria de Guatemala y tengo raíces indígenas mayas. PIOX & L Natural Cleaning nació después de múltiples visitas a emergencias, donde descubrí que sufría reacciones alérgicas severas por el uso constante de químicos agresivos.',
      text2:
        'Decidí dejar atrás los productos tóxicos y volver a la sabiduría natural heredada de mis ancestros.',
      text3:
        'Hoy utilizamos recetas orgánicas y fórmulas tradicionales mayas en nuestros servicios. Nuestros clientes aman la frescura y los aromas saludables que dejamos en su ropa y en sus hogares.',
      value1: 'Sostenibilidad',
      value2: 'Autenticidad cultural',
      value3: 'Bienestar',
      value4: 'Transparencia'
    },

    products: {
      tag: 'Ingredientes naturales',
      title1: 'El poder de la',
      title2: 'naturaleza',
      subtitle:
        'Lavamos tu ropa con ingredientes naturales seleccionados cuidadosamente por su efectividad y suavidad.',
      lavender: {
        name: 'Lavanda',
        desc: 'Aroma relajante y propiedades antibacteriales'
      },
      citrus: {
        name: 'Cítricos',
        desc: 'Ayudan a eliminar manchas y olores'
      },
      vinegar: {
        name: 'Vinagre',
        desc: 'Suavizante natural para las telas'
      },
      baking: {
        name: 'Bicarbonato',
        desc: 'Blanqueador suave y desodorizante'
      },
      flower: {
        name: 'Flor de izote',
        desc: 'Ingrediente ligado a la tradición maya'
      },
      ecoTitle: 'Cuidamos tu ropa y el planeta',
      ecoText:
        'Nuestros productos son biodegradables, seguros para las telas y amables con el medio ambiente.'
    },

    testimonials: {
      tag: 'Testimonios',
      title1: 'Lo que dicen',
      title2: 'nuestros clientes',
      testimonial1: {
        text:
          '"Recomiendo muchísimo a Olga. Es muy trabajadora, confiable, eficiente y siempre usa productos naturales. Ha sido un placer trabajar con ella."',
        name: 'Tiffany P.',
        location: 'Newton, MA'
      },
      testimonial2: {
        text:
          '"Olga no solo limpia; también organiza y aporta ideas para mantener el hogar en armonía. La recomendamos ampliamente."',
        name: 'Familia Daniel',
        location: 'Chestnut Hill, MA'
      },
      testimonial3: {
        text:
          '"El aroma natural de sus productos hace una gran diferencia. Desde que ella limpia mi casa, siento un ambiente más fresco y saludable."',
        name: 'Ricky J.',
        location: 'Jamaica Plain, MA'
      },
      testimonial4: {
        text:
          '"Olga ha sido una ayuda increíble para mí y mi familia durante años. Estamos muy agradecidos por todo lo que hace."',
        name: 'Tricia M.',
        location: 'Quincy, MA'
      },
      testimonial5: {
        text:
          '"Trabajar con Olga ha sido una experiencia excelente. Es responsable, organizada y dejó nuestro hogar impecable en un momento muy importante para nosotros."',
        name: 'Lisa',
        location: 'Chestnut Hill, MA'
      }
    },

    split: {
      cleaning: {
        tag: 'Limpieza de apartamentos',
        title: 'Apartamentos y hogares impecables',
        lead:
          'Limpieza profesional con productos 100% naturales para un hogar fresco, saludable y reluciente.',
        f1: 'Limpieza regular y profunda',
        f2: 'Servicio Move-In / Move-Out',
        f3: 'Productos naturales y seguros',
        f4: 'Cocina y baño incluidos',
        price: 'Desde $120',
        cta: '📞 Programar limpieza',
        badgeTitle: 'Hogares y apartamentos',
        badgeSub: 'Desde $120'
      },
      laundry: {
        tag: 'Servicio de lavandería',
        title: 'Lavado · Secado · Doblado',
        lead:
          'Servicio conveniente de recogida y entrega. Tu ropa vuelve limpia, fresca y lista para usar.',
        f1: 'Lavado, secado y doblado',
        f2: 'Recogida y entrega a domicilio',
        f3: 'Opciones con fragancia natural o sin fragancia',
        f4: '$2.00 por libra',
        price: '$2.00/lb',
        cta: '📞 Programar recogida'
      },
      eco: {
        tag: 'Natural y ecológico',
        title: 'Productos seguros para tu familia y el planeta',
        lead:
          'Usamos recetas orgánicas e inspiración de la tradición maya de Olga para ofrecer una limpieza efectiva y saludable.',
        f1: 'Sin químicos agresivos',
        f2: 'Biodegradables y sostenibles',
        f3: 'Aromas naturales de lavanda y eucalipto',
        save: '¡Ahorra en tu primer servicio!',
        cta: '📞 Llamar o escribir hoy',
        badgeTitle: 'Seguro y ecológico',
        badgeSub: '100% natural'
      }
    },

    boston: {
      tag: '📍 Atendiendo el área de Boston',
      title: 'Limpieza segura y ecológica',
      sub:
        'Usamos productos naturales que son seguros para tu familia, tus mascotas y el planeta.',
      save: 'Ahorra en tu primer servicio. ¡Llama o escribe hoy!',
      callLabel: 'Llamar o escribir:',
      note: 'Respondemos en menos de 2 horas'
    },

    contact: {
      tag: 'Contáctanos',
      title1: 'Programa tu',
      title2: 'servicio',
      title3: 'hoy',
      description:
        'Agenda tu servicio de lavandería o solicita una cotización de limpieza. Normalmente respondemos en menos de 2 horas.',
      phoneLabel: 'Teléfono / WhatsApp',
      emailLabel: 'Correo electrónico',
      locationLabel: 'Área de servicio',
      locationValue: 'Boston y alrededores',
      form: {
        nameLabel: 'Nombre completo',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu@email.com',
        phoneLabel: 'Teléfono',
        phonePlaceholder: '(617) 000-0000',
        serviceLabel: 'Servicio',
        servicePlaceholder: 'Seleccionar...',
        serviceOpt1: 'Lavandería',
        serviceOpt2: 'Wash & Fold Express',
        serviceOpt3: 'Limpieza residencial',
        serviceOpt4: 'Suscripción',
        serviceOpt5: 'Otro',
        messageLabel: 'Mensaje',
        messagePlaceholder: '¿Cuántas libras aproximadamente?',
        submit: 'Enviar solicitud'
      }
    },

    footer: {
      tagline: 'Limpiando el planeta, un hogar a la vez',
      slogan: 'Ropa fresca, vida natural',
      servicesTitle: 'Servicios',
      companyTitle: 'Empresa',
      contactTitle: 'Contacto',
      ourStory: 'Nuestra historia',
      ingredients: 'Ingredientes',
      copyright: '© 2026 PIOX & L Natural Cleaning',
      eco: 'Eco-friendly',
      insured: 'Asegurado',
      minority: 'Minority-Owned Business'
    }
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      cleaning: 'Cleaning',
      laundry: 'Laundry',
      about: 'About',
      products: 'Products',
      contact: 'Contact'
    },

    hero: {
      title1: 'Laundry Services &',
      titleAccent: 'Natural Cleaning',
      tagline: 'Eco-friendly cleaning and laundry services',
      subtitle:
        'Most households generate 20–40 pounds of laundry every week. We pick it up, wash it using 100% natural products, and deliver it fresh and perfectly clean. We also provide professional home and apartment cleaning services throughout Boston, Newton, and Cambridge.',
      hsi1: 'Apartment Cleaning',
      hsi2: 'Wash · Dry · Fold',
      hsi3: 'Free Pickup & Delivery',
      startingAt: 'Starting at $120',
      cta1: '📞 Contact us',
      cta2: 'View Services',
      scrollIndicator: 'Discover more',
      offerEyebrow: 'Special Offer',
      offerUnit: 'Laundry Bags',
      offerOnly: 'Only',
      offerDelivery: 'Delivery Included',
      card1Title: 'Home Cleaning',
      card1f1: 'Regular & Deep Cleaning',
      card1f2: 'Move-In / Move-Out',
      card1f3: 'Natural Products Used',
      card1Price: 'Starting at $120',
      card2Title: 'Wash & Fold Express',
      card2f1: '24 to 48 hour turnaround',
      card2f2: 'Professional folding',
      card2f3: 'Safe for delicate fabrics',
      card2Price: '$3.00/lb',
      promo: '🎉 20% OFF your first service!',
      promoCta: 'Claim Offer',
      quoteBar: 'Call or Text for a Free Quote!'
    },

    trust: {
      insured: 'Fully insured',
      eco: 'Eco-friendly products',
      satisfaction: 'Satisfaction guaranteed',
      minority: 'Certified Minority-Owned Business'
    },

    features: {
      organic: 'Natural products',
      residential: 'Residential cleaning',
      laundry: 'Laundry delivery',
      eco: 'Eco-friendly'
    },

    services: {
      tag: 'Our services',
      title1: 'Laundry & cleaning',
      title2: 'naturally',
      subtitle:
        'Professional laundry pickup and delivery plus residential cleaning using only natural products.',
      flyerHouseTitle: 'Home Cleaning',
      flyerLaundryTitle: 'Laundry Service',
      bookCta: '📞 Schedule Cleaning',
      quoteCta: '🌿 Get a Free Quote',

      residential: {
        title: 'Residential Cleaning',
        description:
          'Professional cleaning for homes and apartments using safe, natural products.',
        feature1: 'Regular & deep cleaning',
        feature2: 'Move-in / Move-out',
        feature3: '100% natural products',
        price: 'Starting at $120'
      },

      deep: {
        badge: 'Most popular',
        title: 'Wash & Fold Express',
        description:
          'Perfect for busy professionals and students who need fast turnaround service.',
        feature1: '24 to 48 hour delivery',
        feature2: 'Professional folding',
        feature3: 'Delicate fabric care',
        price: '$3.00/lb'
      },

      laundry: {
        title: 'Laundry Pickup & Delivery',
        description:
          'We pick up your laundry, wash it with natural soaps, and deliver it back fresh and clean.',
        feature1: 'Free pickup & delivery',
        feature2: 'Washed with natural detergents',
        feature3: 'Scented or fragrance-free options',
        price: '$2.00/lb'
      },

      commercial: {
        title: 'Subscription Package',
        description:
          'A convenient weekly solution that combines home cleaning and laundry service.',
        feature1: '🏠 Weekly cleaning',
        feature2: '🧺 Lights, darks & linens',
        feature3: '🚗 Pickup & delivery included',
        price: 'Request a Quote'
      }
    },

    about: {
      tag: 'Our Story',
      title1: 'Inspired by',
      title2: 'Mayan traditions',
      founderName: 'Olga Piox',
      founderTitle: 'Founder',
      badge: 'Natural tradition',
      text1:
        'My name is <strong>Olga Piox</strong>. I am originally from Guatemala and have indigenous Mayan roots. PIOX & L Natural Cleaning was born after multiple emergency room visits, where I discovered I was suffering severe allergic reactions from years of using harsh chemicals.',
      text2:
        'I decided to leave toxic products behind and return to the natural wisdom passed down by my ancestors.',
      text3:
        'Today, we use organic recipes and traditional Mayan-inspired formulas in our services. Our clients love the freshness and healthy aromas left in their clothes and homes.',
      value1: 'Sustainability',
      value2: 'Cultural authenticity',
      value3: 'Wellbeing',
      value4: 'Transparency'
    },

    products: {
      tag: 'Natural Ingredients',
      title1: 'The power of',
      title2: 'nature',
      subtitle:
        'We wash your clothes with natural ingredients carefully selected for their effectiveness and gentleness.',
      lavender: {
        name: 'Lavender',
        desc: 'Relaxing scent with antibacterial properties'
      },
      citrus: {
        name: 'Citrus',
        desc: 'Helps remove stains and odors'
      },
      vinegar: {
        name: 'Vinegar',
        desc: 'A natural fabric softener'
      },
      baking: {
        name: 'Baking Soda',
        desc: 'A gentle whitener and deodorizer'
      },
      flower: {
        name: 'Izote Flower',
        desc: 'Rooted in Mayan tradition'
      },
      ecoTitle: 'We care for your clothes and the planet',
      ecoText:
        'Our products are biodegradable, fabric-safe, and environmentally friendly.'
    },

    testimonials: {
      tag: 'Testimonials',
      title1: 'What',
      title2: 'our clients say',
      testimonial1: {
        text:
          '"I highly recommend Olga. She is hardworking, trustworthy, efficient, and always uses natural products. It has been a pleasure working with her."',
        name: 'Tiffany P.',
        location: 'Newton, MA'
      },
      testimonial2: {
        text:
          '"Olga does more than clean. She helps organize and brings thoughtful ideas to keep the home calm and stress-free. We highly recommend her."',
        name: "Daniel's Family",
        location: 'Chestnut Hill, MA'
      },
      testimonial3: {
        text:
          '"The natural scent of her products makes such a difference. Since she started cleaning my home, everything feels fresher and healthier."',
        name: 'Ricky J.',
        location: 'Jamaica Plain, MA'
      },
      testimonial4: {
        text:
          '"Olga has been an incredible help to me and my family over the years. We are truly grateful for everything she does."',
        name: 'Tricia M.',
        location: 'Quincy, MA'
      },
      testimonial5: {
        text:
          '"Working with Olga has been wonderful. She is reliable, organized, and brought our home back to order during an important time in our lives."',
        name: 'Lisa',
        location: 'Chestnut Hill, MA'
      }
    },

    split: {
      cleaning: {
        tag: 'Apartment Cleaning',
        title: 'Sparkling clean apartments and homes',
        lead:
          'Professional cleaning with 100% natural products for a fresh, healthy, and spotless home.',
        f1: 'Regular & deep cleaning',
        f2: 'Move-In / Move-Out service',
        f3: 'Safe natural products',
        f4: 'Kitchen and bathroom included',
        price: 'Starting at $120',
        cta: '📞 Schedule Cleaning',
        badgeTitle: 'Homes & Apartments',
        badgeSub: 'Starting at $120'
      },
      laundry: {
        tag: 'Laundry Service',
        title: 'Wash · Dry · Fold',
        lead:
          'Convenient pickup and delivery service. Your laundry comes back clean, fresh, and ready to wear.',
        f1: 'Wash, dry & fold',
        f2: 'Pickup & delivery',
        f3: 'Scented or fragrance-free options',
        f4: '$2.00 per pound',
        price: '$2.00/lb',
        cta: '📞 Schedule Pickup'
      },
      eco: {
        tag: 'Natural & Eco-Friendly',
        title: 'Safe products for your family and the planet',
        lead:
          'We use organic recipes and Mayan-inspired traditions from Olga\'s heritage to deliver effective, healthy cleaning.',
        f1: 'No harsh chemicals',
        f2: 'Biodegradable & sustainable',
        f3: 'Natural lavender and eucalyptus aromas',
        save: 'Save on your first service!',
        cta: '📞 Call or Text Today',
        badgeTitle: 'Safe & Green',
        badgeSub: '100% Natural'
      }
    },

    boston: {
      tag: '📍 Serving the Boston Area',
      title: 'Safe and eco-friendly cleaning',
      sub:
        'We use natural products that are safe for your family, your pets, and the planet.',
      save: 'Save on your first service. Call or text today!',
      callLabel: 'Call or Text:',
      note: 'We respond in less than 2 hours'
    },

    contact: {
      tag: 'Contact us',
      title1: 'Schedule your',
      title2: 'service',
      title3: 'today',
      description:
        'Schedule your laundry service or request a cleaning quote. We usually respond within 2 hours.',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email',
      locationLabel: 'Service Area',
      locationValue: 'Boston and surrounding areas',
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        phoneLabel: 'Phone',
        phonePlaceholder: '(617) 000-0000',
        serviceLabel: 'Service',
        servicePlaceholder: 'Select...',
        serviceOpt1: 'Laundry Service',
        serviceOpt2: 'Wash & Fold Express',
        serviceOpt3: 'Residential Cleaning',
        serviceOpt4: 'Subscription',
        serviceOpt5: 'Other',
        messageLabel: 'Message',
        messagePlaceholder: 'Approximate weight?',
        submit: 'Send Request'
      }
    },

    footer: {
      tagline: 'Cleaning Earth One Home at a Time',
      slogan: 'Fresh clothes, naturally clean living',
      servicesTitle: 'Services',
      companyTitle: 'Company',
      contactTitle: 'Contact',
      ourStory: 'Our Story',
      ingredients: 'Ingredients',
      copyright: '© 2026 PIOX & L Natural Cleaning',
      eco: 'Eco-friendly',
      insured: 'Insured',
      minority: 'Minority-Owned Business'
    }
  }
};

  get t(): Translations {
    return this.translations[this.currentLang];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('piox-lang', this.currentLang);
  }

  ngOnInit(): void {
    const savedLang = localStorage.getItem('piox-lang') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      this.currentLang = savedLang;
    }
    this.startCarousel();
  }

  // ── Carousel ──────────────────────────────
  carouselIndex = 0;
  private carouselTimer: any;
  private readonly carouselTotal = 2;

  startCarousel(): void {
    this.carouselTimer = setInterval(() => {
      this.carouselIndex = (this.carouselIndex + 1) % this.carouselTotal;
    }, 3500);
  }

  pauseCarousel(): void {
    clearInterval(this.carouselTimer);
  }

  resumeCarousel(): void {
    this.startCarousel();
  }

  nextSlide(): void {
    this.carouselIndex = (this.carouselIndex + 1) % this.carouselTotal;
  }

  prevSlide(): void {
    this.carouselIndex = (this.carouselIndex - 1 + this.carouselTotal) % this.carouselTotal;
  }

  goToSlide(index: number): void {
    this.carouselIndex = index;
  }
}