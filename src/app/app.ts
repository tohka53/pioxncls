import { Component, HostListener } from '@angular/core';

type Language = 'es' | 'en';

interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    products: string;
    contact: string;
    callNow: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleAccent: string;
    title2: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    scrollIndicator: string;
    cardTitle: string;
    cardText: string;
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
    citrus: { name: string; desc: string };
    vinegar: { name: string; desc: string };
    baking: { name: string; desc: string };
    flower: { name: string; desc: string };
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
  };
  pricing: {
    tag: string;
    title1: string;
    title2: string;
    subtitle: string;
    essential: {
      name: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      cta: string;
    };
    premium: {
      badge: string;
      name: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      feature5: string;
      cta: string;
    };
    enterprise: {
      name: string;
      price: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      feature5: string;
      cta: string;
    };
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
  styleUrl: './app.scss'
})
export class App {
  title = 'Piox Natural Cleaning';
  isScrolled = false;
  menuOpen = false;
  currentLang: Language = 'en';

  translations: Record<Language, Translations> = {
    es: {
      nav: {
        home: 'Inicio',
        services: 'Servicios',
        about: 'Nosotros',
        products: 'Productos',
        contact: 'Contacto',
        callNow: 'Llamar Ahora'
      },
      hero: {
        badge: '🧺 Lavandería Natural a Domicilio',
        title1: 'Lavandería y limpieza',
        titleAccent: 'natural a domicilio',
        title2: 'en Boston y alrededores',
        subtitle: 'Recogemos, lavamos con productos 100% naturales y entregamos tu ropa fresca y limpia. También limpiamos estudios y apartamentos de estudiantes.',
        cta1: 'Programar Recogida',
        cta2: 'Ver Servicios',
        stat1Label: 'Natural',
        stat2Label: 'Clientes Felices',
        stat3Label: 'Por Libra',
        scrollIndicator: 'Descubre más',
        cardTitle: 'Recogida Gratis',
        cardText: 'En toda el área de Boston'
      },
      features: {
        organic: 'Productos Naturales',
        residential: 'Limpieza de Estudios',
        laundry: 'Lavandería a Domicilio',
        eco: 'Eco-Friendly'
      },
      services: {
        tag: 'Nuestros Servicios',
        title1: 'Lavandería y Limpieza',
        title2: 'Natural',
        subtitle: 'Servicio de lavandería a domicilio y limpieza de estudios para estudiantes. Usamos solo productos naturales que cuidan tu ropa, tu salud y el medio ambiente.',
        residential: {
          title: 'Lavandería a Domicilio',
          description: 'Recogemos tu ropa, la lavamos con jabones naturales artesanales y la entregamos fresca con aroma a lavanda.',
          feature1: 'Recogida y entrega gratis',
          feature2: 'Lavado con productos naturales',
          feature3: 'Aromaterapia con lavanda incluida',
          price: '$2.00/lb'
        },
        deep: {
          badge: 'Más Popular',
          title: 'Wash & Fold Express',
          description: 'Servicio express de lavado y doblado. Ideal para estudiantes y profesionales ocupados. ¡Entrega en 24-48 horas!',
          feature1: 'Entrega en 24-48 horas',
          feature2: 'Doblado profesional',
          feature3: 'Cuidado de telas delicadas',
          price: '$2.00/lb'
        },
        laundry: {
          title: 'Limpieza de Estudios',
          description: 'Limpieza profesional de estudios y apartamentos pequeños. Perfecto para estudiantes universitarios.',
          feature1: 'Estudios y apartamentos pequeños',
          feature2: 'Productos 100% naturales',
          feature3: 'Precios especiales para estudiantes',
          price: 'Desde $80'
        },
        commercial: {
          title: 'Paquete Estudiante',
          description: 'Combo de lavandería + limpieza de estudio. El paquete perfecto para estudiantes ocupados.',
          feature1: 'Lavandería semanal incluida',
          feature2: 'Limpieza quincenal de estudio',
          feature3: 'Descuento especial estudiantes',
          price: 'Cotización'
        }
      },
      about: {
        tag: 'Nuestra Historia',
        title1: 'De Antigua, Guatemala',
        title2: 'Boston',
        founderName: 'Olga Piox',
        founderTitle: 'Fundadora',
        badge: 'Tradición Maya',
        text1: 'Mi nombre es <strong>Olga Piox</strong>. Lavender & Piox Natural Cleaning nació después de múltiples visitas a emergencias donde descubrí que sufría reacciones alérgicas severas por años de usar químicos agresivos para limpiar.',
        text2: 'Era tiempo de terminar con las dolorosas erupciones en la piel y reclamar la sabiduría de mis ancestros Mayas Indígenas que dependían de los regalos de la Madre Naturaleza.',
        text3: 'Ahora ofrecemos lavandería a domicilio y limpieza de estudios usando recetas orgánicas y fórmulas desinfectantes de mi cultura. Nuestros clientes aman la frescura y los aromas saludables en su ropa y hogares.',
        value1: 'Sostenibilidad',
        value2: 'Autenticidad Cultural',
        value3: 'Bienestar',
        value4: 'Transparencia'
      },
      products: {
        tag: 'Ingredientes Naturales',
        title1: 'El Poder de la',
        title2: 'Naturaleza',
        subtitle: 'Lavamos tu ropa con ingredientes puros y naturales, muchos importados directamente de cooperativas en Antigua, Guatemala.',
        lavender: { name: 'Lavanda', desc: 'Aroma relajante y antibacterial' },
        citrus: { name: 'Cítricos', desc: 'Elimina manchas y olores' },
        vinegar: { name: 'Vinagre', desc: 'Suavizante natural' },
        baking: { name: 'Bicarbonato', desc: 'Blanqueador suave' },
        flower: { name: 'Flor de Izote', desc: 'Tradición guatemalteca' },
        ecoTitle: 'Cuidamos tu Ropa y el Planeta',
        ecoText: 'Nuestros jabones artesanales son biodegradables y gentiles con las telas. Tu ropa dura más y el planeta te lo agradece.'
      },
      testimonials: {
        tag: 'Testimonios',
        title1: 'Lo que Dicen',
        title2: 'Nuestros Clientes',
        testimonial1: {
          text: '"Como estudiante de BU, no tengo tiempo para lavar. Piox recoge mi ropa y me la devuelve oliendo increíble a lavanda. ¡El mejor servicio!"',
          name: 'Carlos Rodríguez',
          location: 'Boston University'
        },
        testimonial2: {
          text: '"La limpieza de mi estudio quedó impecable y el aroma natural es divino. Además los precios son muy accesibles para estudiantes."',
          name: 'María Santos',
          location: 'Northeastern University'
        },
        testimonial3: {
          text: '"Por fin un servicio de lavandería que usa productos naturales. Mi ropa está más suave y mis alergias han mejorado mucho."',
          name: 'Jennifer Smith',
          location: 'Cambridge, MA'
        }
      },
      pricing: {
        tag: 'Precios',
        title1: 'Planes',
        title2: 'Simples',
        subtitle: 'Precios transparentes y accesibles. Especiales para estudiantes.',
        essential: {
          name: 'Lavandería',
          feature1: 'Recogida y entrega gratis',
          feature2: 'Lavado con productos naturales',
          feature3: 'Doblado incluido',
          feature4: 'Aromaterapia con lavanda',
          cta: 'Programar'
        },
        premium: {
          badge: 'Popular',
          name: 'Paquete Estudiante',
          feature1: 'Lavandería semanal (hasta 15 lbs)',
          feature2: 'Limpieza de estudio mensual',
          feature3: 'Productos 100% naturales',
          feature4: 'Recogida y entrega',
          feature5: 'Descuento 15%',
          cta: 'Elegir Plan'
        },
        enterprise: {
          name: 'Limpieza Estudio',
          price: 'Desde $80',
          feature1: 'Estudios hasta 400 sq ft',
          feature2: 'Productos naturales',
          feature3: 'Cocina y baño incluidos',
          feature4: 'Aromaterapia incluida',
          feature5: 'Descuento estudiantes',
          cta: 'Cotizar'
        }
      },
      contact: {
        tag: 'Contáctanos',
        title1: 'Programa tu',
        title2: 'Recogida',
        title3: 'Hoy',
        description: 'Agenda tu recogida de lavandería o solicita una cotización para limpieza de tu estudio. ¡Respondemos en menos de 2 horas!',
        phoneLabel: 'Teléfono / WhatsApp',
        emailLabel: 'Email',
        locationLabel: 'Área de Servicio',
        locationValue: 'Boston y alrededores',
        form: {
          nameLabel: 'Nombre Completo',
          namePlaceholder: 'Tu nombre',
          emailLabel: 'Email',
          emailPlaceholder: 'tu@email.com',
          phoneLabel: 'Teléfono',
          phonePlaceholder: '(617) 000-0000',
          serviceLabel: 'Servicio de Interés',
          servicePlaceholder: 'Seleccionar servicio...',
          serviceOpt1: 'Lavandería a Domicilio',
          serviceOpt2: 'Wash & Fold Express',
          serviceOpt3: 'Limpieza de Estudio',
          serviceOpt4: 'Paquete Estudiante',
          serviceOpt5: 'Otro',
          messageLabel: 'Mensaje',
          messagePlaceholder: '¿Cuántas libras aproximadamente? ¿Tienes alguna preferencia de aroma?',
          submit: 'Enviar Solicitud'
        }
      },
      footer: {
        tagline: "Nature's Touch from Antigua to Boston",
        slogan: 'Ropa Fresca, Vida Natural',
        servicesTitle: 'Servicios',
        companyTitle: 'Empresa',
        contactTitle: 'Contacto',
        ourStory: 'Nuestra Historia',
        ingredients: 'Ingredientes',
        copyright: '© 2025 Lavender & Piox Natural Cleaning. Todos los derechos reservados.',
        eco: 'Eco-Friendly',
        insured: 'Asegurado',
        minority: 'Minority-Owned Business'
      }
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        products: 'Products',
        contact: 'Contact',
        callNow: 'Call Now'
      },
      hero: {
        badge: '🧺 Natural Laundry Pickup & Delivery',
        title1: 'Natural laundry',
        titleAccent: 'pickup & delivery',
        title2: 'in Boston and surrounding areas',
        subtitle: 'We pick up, wash with 100% natural products, and deliver your clothes fresh and clean. We also clean student studios and apartments.',
        cta1: 'Schedule Pickup',
        cta2: 'View Services',
        stat1Label: 'Natural',
        stat2Label: 'Happy Clients',
        stat3Label: 'Per Pound',
        scrollIndicator: 'Discover more',
        cardTitle: 'Free Pickup',
        cardText: 'Across the Boston area'
      },
      features: {
        organic: 'Natural Products',
        residential: 'Studio Cleaning',
        laundry: 'Laundry Delivery',
        eco: 'Eco-Friendly'
      },
      services: {
        tag: 'Our Services',
        title1: 'Laundry & Cleaning',
        title2: 'Naturally',
        subtitle: 'Laundry pickup & delivery and studio cleaning for students. We use only natural products that care for your clothes, your health, and the environment.',
        residential: {
          title: 'Laundry Pickup & Delivery',
          description: 'We pick up your clothes, wash them with handcrafted natural soaps, and deliver them fresh with a lavender scent.',
          feature1: 'Free pickup & delivery',
          feature2: 'Washed with natural products',
          feature3: 'Lavender aromatherapy included',
          price: '$2.00/lb'
        },
        deep: {
          badge: 'Most Popular',
          title: 'Wash & Fold Express',
          description: 'Express wash and fold service. Perfect for busy students and professionals. Delivery in 24-48 hours!',
          feature1: '24-48 hour delivery',
          feature2: 'Professional folding',
          feature3: 'Delicate fabric care',
          price: '$4.00/lb'
        },
        laundry: {
          title: 'Studio Cleaning',
          description: 'Professional cleaning for studios and small apartments. Perfect for college students.',
          feature1: 'Studios and small apartments',
          feature2: '100% natural products',
          feature3: 'Special student pricing',
          price: 'From $80'
        },
        commercial: {
          title: 'Student Package',
          description: 'Laundry + studio cleaning combo. The perfect package for busy students.',
          feature1: 'Weekly laundry included',
          feature2: 'Bi-weekly studio cleaning',
          feature3: 'Special student discount',
          price: 'Quote'
        }
      },
      about: {
        tag: 'Our Story',
        title1: 'From Antigua, Guatemala',
        title2: 'Boston',
        founderName: 'Olga Piox',
        founderTitle: 'Founder',
        badge: 'Mayan Tradition',
        text1: 'My name is <strong>Olga Piox</strong>. Lavender & Piox Natural Cleaning was born after multiple emergency room visits where I discovered I was suffering severe allergic reactions from years of using harsh chemicals for cleaning.',
        text2: 'It was time to end the painful skin eruptions and reclaim the wisdom of my Indigenous Mayan ancestors who relied on Mother Nature\'s gifts.',
        text3: 'Now we offer laundry pickup & delivery and studio cleaning using organic recipes and disinfectant formulas from my culture. Our clients love the freshness and healthy aromas in their clothes and homes.',
        value1: 'Sustainability',
        value2: 'Cultural Authenticity',
        value3: 'Wellbeing',
        value4: 'Transparency'
      },
      products: {
        tag: 'Natural Ingredients',
        title1: 'The Power of',
        title2: 'Nature',
        subtitle: 'We wash your clothes with pure and natural ingredients, many imported directly from cooperatives in Antigua, Guatemala.',
        lavender: { name: 'Lavender', desc: 'Relaxing scent and antibacterial' },
        citrus: { name: 'Citrus', desc: 'Removes stains and odors' },
        vinegar: { name: 'Vinegar', desc: 'Natural fabric softener' },
        baking: { name: 'Baking Soda', desc: 'Gentle whitener' },
        flower: { name: 'Izote Flower', desc: 'Guatemalan tradition' },
        ecoTitle: 'We Care for Your Clothes & the Planet',
        ecoText: 'Our handcrafted soaps are biodegradable and gentle on fabrics. Your clothes last longer and the planet thanks you.'
      },
      testimonials: {
        tag: 'Testimonials',
        title1: 'What Our',
        title2: 'Clients Say',
        testimonial1: {
          text: '"As a BU student, I don\'t have time to do laundry. Piox picks up my clothes and returns them smelling amazing like lavender. Best service ever!"',
          name: 'Carlos Rodriguez',
          location: 'Boston University'
        },
        testimonial2: {
          text: '"My studio cleaning was spotless and the natural scent is divine. Plus the prices are very affordable for students."',
          name: 'Maria Santos',
          location: 'Northeastern University'
        },
        testimonial3: {
          text: '"Finally a laundry service that uses natural products. My clothes are softer and my allergies have improved so much."',
          name: 'Jennifer Smith',
          location: 'Cambridge, MA'
        }
      },
      pricing: {
        tag: 'Pricing',
        title1: 'Simple',
        title2: 'Plans',
        subtitle: 'Transparent and affordable pricing. Student specials available.',
        essential: {
          name: 'Laundry',
          feature1: 'Free pickup & delivery',
          feature2: 'Washed with natural products',
          feature3: 'Folding included',
          feature4: 'Lavender aromatherapy',
          cta: 'Schedule'
        },
        premium: {
          badge: 'Popular',
          name: 'Student Package',
          feature1: 'Weekly laundry (up to 15 lbs)',
          feature2: 'Monthly studio cleaning',
          feature3: '100% natural products',
          feature4: 'Pickup & delivery',
          feature5: '15% discount',
          cta: 'Choose Plan'
        },
        enterprise: {
          name: 'Studio Cleaning',
          price: 'From $80',
          feature1: 'Studios up to 400 sq ft',
          feature2: 'Natural products',
          feature3: 'Kitchen & bath included',
          feature4: 'Aromatherapy included',
          feature5: 'Student discount',
          cta: 'Get Quote'
        }
      },
      contact: {
        tag: 'Contact Us',
        title1: 'Schedule Your',
        title2: 'Pickup',
        title3: 'Today',
        description: 'Schedule your laundry pickup or request a quote for studio cleaning. We respond in less than 2 hours!',
        phoneLabel: 'Phone / WhatsApp',
        emailLabel: 'Email',
        locationLabel: 'Service Area',
        locationValue: 'Boston and surrounding areas',
        form: {
          nameLabel: 'Full Name',
          namePlaceholder: 'Your name',
          emailLabel: 'Email',
          emailPlaceholder: 'you@email.com',
          phoneLabel: 'Phone',
          phonePlaceholder: '(617) 000-0000',
          serviceLabel: 'Service of Interest',
          servicePlaceholder: 'Select service...',
          serviceOpt1: 'Laundry Pickup & Delivery',
          serviceOpt2: 'Wash & Fold Express',
          serviceOpt3: 'Studio Cleaning',
          serviceOpt4: 'Student Package',
          serviceOpt5: 'Other',
          messageLabel: 'Message',
          messagePlaceholder: 'Approximately how many pounds? Any scent preferences?',
          submit: 'Send Request'
        }
      },
      footer: {
        tagline: "Nature's Touch from Antigua to Boston",
        slogan: 'Fresh Clothes, Natural Life',
        servicesTitle: 'Services',
        companyTitle: 'Company',
        contactTitle: 'Contact',
        ourStory: 'Our Story',
        ingredients: 'Ingredients',
        copyright: '© 2025 Lavender & Piox Natural Cleaning. All rights reserved.',
        eco: 'Eco-Friendly',
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
  }
}