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
        badge: '🌸 100% Natural & Artesanal',
        title1: 'Limpieza Natural',
        titleAccent: 'desde Antigua Guatemala',
        title2: 'hasta Boston',
        subtitle: 'Transformamos tu hogar en un santuario de pureza con productos naturales elaborados artesanalmente, inspirados en la sabiduría ancestral Maya.',
        cta1: 'Solicitar Cotización',
        cta2: 'Ver Servicios',
        stat1Label: 'Natural',
        stat2Label: 'Clientes Felices',
        stat3Label: 'Calificación',
        scrollIndicator: 'Descubre más',
        cardTitle: 'Limpieza Ecológica',
        cardText: 'Sin químicos tóxicos'
      },
      features: {
        organic: 'Productos Orgánicos',
        residential: 'Limpieza Residencial',
        laundry: 'Servicio de Lavandería',
        eco: 'Eco-Friendly'
      },
      services: {
        tag: 'Nuestros Servicios',
        title1: 'Cuidamos tu Hogar',
        title2: 'Naturalmente',
        subtitle: 'Ofrecemos servicios de limpieza profesional utilizando exclusivamente productos naturales que cuidan tu salud y el medio ambiente.',
        residential: {
          title: 'Limpieza Residencial',
          description: 'Limpieza profunda de hogares con productos 100% naturales que eliminan gérmenes sin dejar residuos tóxicos.',
          feature1: 'Limpieza regular semanal',
          feature2: 'Limpieza profunda mensual',
          feature3: 'Desinfección natural',
          price: 'Desde $120'
        },
        deep: {
          badge: 'Más Popular',
          title: 'Limpieza Profunda',
          description: 'Servicio completo para mudanzas, post-construcción o limpieza exhaustiva de primavera.',
          feature1: 'Limpieza de move-in/move-out',
          feature2: 'Post-construcción',
          feature3: 'Limpieza de alfombras',
          price: 'Desde $250'
        },
        laundry: {
          title: 'Lavandería Natural',
          description: 'Cuidamos tus prendas con jabones naturales y opciones de aromaterapia con lavanda.',
          feature1: 'Lavado con productos naturales',
          feature2: 'Aromaterapia incluida',
          feature3: 'Cuidado de telas delicadas',
          price: 'Desde $1.50/lb'
        },
        commercial: {
          title: 'Limpieza Comercial',
          description: 'Mantenemos espacios de trabajo limpios y saludables para tu equipo y clientes.',
          feature1: 'Oficinas y consultorios',
          feature2: 'Estudios de wellness',
          feature3: 'Contratos mensuales',
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
        text3: 'Comencé a reemplazar agentes de limpieza estándar con recetas de limpieza orgánica y fórmulas desinfectantes que me fueron transmitidas por mi cultura. Mis clientes aman la sensación de frescura y los aromas saludables que llenan sus hogares.',
        value1: 'Sostenibilidad',
        value2: 'Autenticidad Cultural',
        value3: 'Bienestar',
        value4: 'Transparencia'
      },
      products: {
        tag: 'Ingredientes Naturales',
        title1: 'El Poder de la',
        title2: 'Naturaleza',
        subtitle: 'Utilizamos ingredientes puros y naturales, muchos de ellos importados directamente de cooperativas en Antigua, Guatemala.',
        lavender: { name: 'Lavanda', desc: 'Relajante y antibacterial natural' },
        citrus: { name: 'Cítricos', desc: 'Desengrasante y aromatizante' },
        vinegar: { name: 'Vinagre', desc: 'Desinfectante y removedor de manchas' },
        baking: { name: 'Bicarbonato', desc: 'Limpiador multiusos suave' },
        flower: { name: 'Flor de Izote', desc: 'Tradición guatemalteca' },
        ecoTitle: 'Compromiso Ecológico',
        ecoText: 'Utilizamos empaques biodegradables, recargables y trabajamos con pequeños productores en Guatemala para garantizar prácticas sostenibles.'
      },
      testimonials: {
        tag: 'Testimonios',
        title1: 'Lo que Dicen',
        title2: 'Nuestros Clientes',
        testimonial1: {
          text: '"Desde que Piox Natural comenzó a limpiar mi casa, mis alergias han mejorado increíblemente. El aroma a lavanda es divino y saber que no hay químicos tóxicos me da mucha paz."',
          name: 'María González',
          location: 'Cambridge, MA'
        },
        testimonial2: {
          text: '"Como madre de dos niños pequeños, siempre me preocuparon los productos de limpieza. Olga y su equipo usan productos que son seguros y efectivos. ¡Altamente recomendados!"',
          name: 'Jennifer Smith',
          location: 'Boston, MA'
        },
        testimonial3: {
          text: '"El servicio de lavandería con aromaterapia es increíble. Mi ropa nunca ha olido tan bien y es reconfortante saber que es todo natural."',
          name: 'Carlos Méndez',
          location: 'Somerville, MA'
        }
      },
      pricing: {
        tag: 'Membresías',
        title1: 'Planes',
        title2: 'Mensuales',
        subtitle: 'Ahorra con nuestros planes de membresía y mantén tu hogar siempre impecable.',
        essential: {
          name: 'Esencial',
          feature1: '2 limpiezas mensuales',
          feature2: 'Productos 100% naturales',
          feature3: 'Hasta 1,500 sq ft',
          feature4: 'Aromaterapia básica',
          cta: 'Elegir Plan'
        },
        premium: {
          badge: 'Recomendado',
          name: 'Premium',
          feature1: '4 limpiezas mensuales',
          feature2: 'Productos premium',
          feature3: 'Hasta 2,500 sq ft',
          feature4: 'Aromaterapia completa',
          feature5: 'Lavandería incluida',
          cta: 'Elegir Plan'
        },
        enterprise: {
          name: 'Empresarial',
          price: 'Cotizar',
          feature1: 'Servicio personalizado',
          feature2: 'Múltiples ubicaciones',
          feature3: 'Horario flexible',
          feature4: 'Productos especializados',
          feature5: 'Facturación corporativa',
          cta: 'Contactar'
        }
      },
      contact: {
        tag: 'Contáctanos',
        title1: 'Comienza tu Camino',
        title2: 'hacia un Hogar',
        title3: 'Más Natural',
        description: 'Estamos aquí para responder tus preguntas y crear un plan de limpieza personalizado para tu hogar o negocio.',
        phoneLabel: 'Teléfono / WhatsApp',
        emailLabel: 'Email',
        locationLabel: 'Ubicación',
        locationValue: 'Boston, Massachusetts',
        form: {
          nameLabel: 'Nombre Completo',
          namePlaceholder: 'Tu nombre',
          emailLabel: 'Email',
          emailPlaceholder: 'tu@email.com',
          phoneLabel: 'Teléfono',
          phonePlaceholder: '(617) 000-0000',
          serviceLabel: 'Servicio de Interés',
          servicePlaceholder: 'Seleccionar servicio...',
          serviceOpt1: 'Limpieza Residencial',
          serviceOpt2: 'Limpieza Profunda',
          serviceOpt3: 'Lavandería Natural',
          serviceOpt4: 'Limpieza Comercial',
          serviceOpt5: 'Membresía Mensual',
          messageLabel: 'Mensaje',
          messagePlaceholder: 'Cuéntanos sobre tu espacio y necesidades...',
          submit: 'Enviar Solicitud'
        }
      },
      footer: {
        tagline: "Nature's Touch from Antigua to Boston",
        slogan: 'Cleaning Earth One Home at a Time!',
        servicesTitle: 'Servicios',
        companyTitle: 'Empresa',
        contactTitle: 'Contacto',
        ourStory: 'Nuestra Historia',
        ingredients: 'Ingredientes',
        copyright: '© 2025 Piox Natural Cleaning & Laundry Services. Todos los derechos reservados.',
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
        badge: '🌸 100% Natural & Handcrafted',
        title1: 'Natural Cleaning',
        titleAccent: 'from Antigua Guatemala',
        title2: 'to Boston',
        subtitle: 'We transform your home into a sanctuary of purity with handcrafted natural products, inspired by ancestral Mayan wisdom.',
        cta1: 'Request Quote',
        cta2: 'View Services',
        stat1Label: 'Natural',
        stat2Label: 'Happy Clients',
        stat3Label: 'Rating',
        scrollIndicator: 'Discover more',
        cardTitle: 'Eco Cleaning',
        cardText: 'No toxic chemicals'
      },
      features: {
        organic: 'Organic Products',
        residential: 'Residential Cleaning',
        laundry: 'Laundry Service',
        eco: 'Eco-Friendly'
      },
      services: {
        tag: 'Our Services',
        title1: 'We Care for Your Home',
        title2: 'Naturally',
        subtitle: 'We offer professional cleaning services using exclusively natural products that care for your health and the environment.',
        residential: {
          title: 'Residential Cleaning',
          description: 'Deep home cleaning with 100% natural products that eliminate germs without leaving toxic residues.',
          feature1: 'Weekly regular cleaning',
          feature2: 'Monthly deep cleaning',
          feature3: 'Natural disinfection',
          price: 'From $120'
        },
        deep: {
          badge: 'Most Popular',
          title: 'Deep Cleaning',
          description: 'Complete service for moves, post-construction, or thorough spring cleaning.',
          feature1: 'Move-in/move-out cleaning',
          feature2: 'Post-construction',
          feature3: 'Carpet cleaning',
          price: 'From $250'
        },
        laundry: {
          title: 'Natural Laundry',
          description: 'We care for your clothes with natural soaps and lavender aromatherapy options.',
          feature1: 'Washing with natural products',
          feature2: 'Aromatherapy included',
          feature3: 'Delicate fabric care',
          price: 'From $1.50/lb'
        },
        commercial: {
          title: 'Commercial Cleaning',
          description: 'We maintain clean and healthy workspaces for your team and clients.',
          feature1: 'Offices and clinics',
          feature2: 'Wellness studios',
          feature3: 'Monthly contracts',
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
        text3: 'I began replacing standard cleaning agents with organic cleaning recipes and disinfectant formulas passed down through my culture. My clients love the fresh feeling and healthy aromas that fill their homes.',
        value1: 'Sustainability',
        value2: 'Cultural Authenticity',
        value3: 'Wellbeing',
        value4: 'Transparency'
      },
      products: {
        tag: 'Natural Ingredients',
        title1: 'The Power of',
        title2: 'Nature',
        subtitle: 'We use pure and natural ingredients, many of them imported directly from cooperatives in Antigua, Guatemala.',
        lavender: { name: 'Lavender', desc: 'Relaxing and natural antibacterial' },
        citrus: { name: 'Citrus', desc: 'Degreaser and aromatizer' },
        vinegar: { name: 'Vinegar', desc: 'Disinfectant and stain remover' },
        baking: { name: 'Baking Soda', desc: 'Gentle multi-purpose cleaner' },
        flower: { name: 'Izote Flower', desc: 'Guatemalan tradition' },
        ecoTitle: 'Eco Commitment',
        ecoText: 'We use biodegradable, refillable packaging and work with small producers in Guatemala to ensure sustainable practices.'
      },
      testimonials: {
        tag: 'Testimonials',
        title1: 'What Our',
        title2: 'Clients Say',
        testimonial1: {
          text: '"Since Piox Natural started cleaning my house, my allergies have improved incredibly. The lavender scent is divine and knowing there are no toxic chemicals gives me so much peace."',
          name: 'María González',
          location: 'Cambridge, MA'
        },
        testimonial2: {
          text: '"As a mother of two small children, I was always worried about cleaning products. Olga and her team use products that are safe and effective. Highly recommended!"',
          name: 'Jennifer Smith',
          location: 'Boston, MA'
        },
        testimonial3: {
          text: '"The aromatherapy laundry service is amazing. My clothes have never smelled so good and it\'s comforting to know it\'s all natural."',
          name: 'Carlos Méndez',
          location: 'Somerville, MA'
        }
      },
      pricing: {
        tag: 'Memberships',
        title1: 'Monthly',
        title2: 'Plans',
        subtitle: 'Save with our membership plans and keep your home always spotless.',
        essential: {
          name: 'Essential',
          feature1: '2 monthly cleanings',
          feature2: '100% natural products',
          feature3: 'Up to 1,500 sq ft',
          feature4: 'Basic aromatherapy',
          cta: 'Choose Plan'
        },
        premium: {
          badge: 'Recommended',
          name: 'Premium',
          feature1: '4 monthly cleanings',
          feature2: 'Premium products',
          feature3: 'Up to 2,500 sq ft',
          feature4: 'Full aromatherapy',
          feature5: 'Laundry included',
          cta: 'Choose Plan'
        },
        enterprise: {
          name: 'Enterprise',
          price: 'Quote',
          feature1: 'Personalized service',
          feature2: 'Multiple locations',
          feature3: 'Flexible schedule',
          feature4: 'Specialized products',
          feature5: 'Corporate billing',
          cta: 'Contact'
        }
      },
      contact: {
        tag: 'Contact Us',
        title1: 'Start Your Journey',
        title2: 'to a',
        title3: 'More Natural Home',
        description: 'We\'re here to answer your questions and create a personalized cleaning plan for your home or business.',
        phoneLabel: 'Phone / WhatsApp',
        emailLabel: 'Email',
        locationLabel: 'Location',
        locationValue: 'Boston, Massachusetts',
        form: {
          nameLabel: 'Full Name',
          namePlaceholder: 'Your name',
          emailLabel: 'Email',
          emailPlaceholder: 'you@email.com',
          phoneLabel: 'Phone',
          phonePlaceholder: '(617) 000-0000',
          serviceLabel: 'Service of Interest',
          servicePlaceholder: 'Select service...',
          serviceOpt1: 'Residential Cleaning',
          serviceOpt2: 'Deep Cleaning',
          serviceOpt3: 'Natural Laundry',
          serviceOpt4: 'Commercial Cleaning',
          serviceOpt5: 'Monthly Membership',
          messageLabel: 'Message',
          messagePlaceholder: 'Tell us about your space and needs...',
          submit: 'Send Request'
        }
      },
      footer: {
        tagline: "Nature's Touch from Antigua to Boston",
        slogan: 'Cleaning Earth One Home at a Time!',
        servicesTitle: 'Services',
        companyTitle: 'Company',
        contactTitle: 'Contact',
        ourStory: 'Our Story',
        ingredients: 'Ingredients',
        copyright: '© 2025 Piox Natural Cleaning & Laundry Services. All rights reserved.',
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
    // Optionally save to localStorage
    localStorage.setItem('piox-lang', this.currentLang);
  }

  ngOnInit(): void {
    // Load saved language preference
    const savedLang = localStorage.getItem('piox-lang') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      this.currentLang = savedLang;
    }
  }
}