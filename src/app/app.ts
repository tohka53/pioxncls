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
    testimonial4: { text: string; name: string; location: string };
    testimonial5: { text: string; name: string; location: string };
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
        badge: '🪻 Lavandería Natural a Domicilio',
        title1: 'Servicios de Lavandería',
        titleAccent: 'y Limpieza',
        title2: 'en Boston y alrededores',
        subtitle: 'Recogemos, lavamos con productos 100% naturales y entregamos tu ropa fresca y limpia. También limpiamos estudios y apartamentos.',
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
        residential: 'Limpieza del Hogar',
        laundry: 'Lavandería a Domicilio',
        eco: 'Eco-Friendly'
      },
      services: {
        tag: 'Nuestros Servicios',
        title1: 'Lavandería y Limpieza',
        title2: 'Natural',
        subtitle: 'Servicio de lavandería a domicilio y limpieza de estudios y apartamentos. Usamos solo productos naturales que cuidan tu ropa, tu salud y el medio ambiente.',
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
          title: 'Limpieza del Hogar',
          description: 'Limpieza profesional de estudios y apartamentos. Perfecto para estudiantes universitarios, profesionales ocupados y personas que necesitan un hogar ordenado.',
          feature1: 'Estudios y apartamentos',
          feature2: 'Productos 100% naturales',
          feature3: 'Precios accesibles',
          price: 'Desde $120'
        },
        commercial: {
          title: 'Paquete de Suscripción',
          description: 'Combo de lavandería semanal + limpieza del hogar con recogida y entrega. El paquete perfecto para quienes desean una solución completa.',
          feature1: '🧺 Lavandería semanal incluida',
          feature2: '🏠 Limpieza del hogar con recogida/entrega',
          feature3: '🌿 Productos 100% naturales',
          price: 'Cotización'
        }
      },
      about: {
        tag: 'Nuestra Historia',
        title1: 'Arraigados en',
        title2: 'Tradiciones Mayas',
        founderName: 'Olga Piox',
        founderTitle: 'Fundadora',
        badge: 'Tradición Natural',
        text1: 'Mi nombre es <strong>Olga Piox</strong>. Soy nativa de Guatemala con raíces indígenas mayas. Lavender & Piox Natural Cleaning nació después de múltiples visitas a emergencias donde descubrí que sufría reacciones alérgicas severas por años de usar químicos agresivos para limpiar.',
        text2: 'Era tiempo de terminar con las dolorosas erupciones en la piel y reclamar la sabiduría de mis ancestros que dependían de los regalos de la Madre Naturaleza.',
        text3: 'Así fue como llegué a depender de recetas orgánicas y fórmulas desinfectantes de mi cultura maya. Usamos estos productos en nuestros servicios de lavandería y limpieza del hogar. Nuestros clientes aman la frescura y los aromas saludables en su ropa y hogares.',
        value1: 'Sostenibilidad',
        value2: 'Autenticidad Cultural',
        value3: 'Bienestar',
        value4: 'Transparencia'
      },
      products: {
        tag: 'Ingredientes Naturales',
        title1: 'El Poder de la',
        title2: 'Naturaleza',
        subtitle: 'Lavamos tu ropa con ingredientes puros y naturales, seleccionados cuidadosamente por su efectividad y gentileza.',
        lavender: { name: 'Lavanda', desc: 'Aroma relajante y antibacterial' },
        citrus: { name: 'Cítricos', desc: 'Elimina manchas y olores' },
        vinegar: { name: 'Vinagre', desc: 'Suavizante natural' },
        baking: { name: 'Bicarbonato', desc: 'Blanqueador suave' },
        flower: { name: 'Flor de Izote', desc: 'Tradición maya' },
        ecoTitle: 'Cuidamos tu Ropa y el Planeta',
        ecoText: 'Nuestros jabones artesanales son biodegradables y gentiles con las telas. Tu ropa dura más y el planeta te lo agradece.'
      },
      testimonials: {
        tag: 'Testimonios',
        title1: 'Lo que Dicen',
        title2: 'Nuestros Clientes',
        testimonial1: {
          text: '"¡Recomiendo mucho a Olga! La conozco a ella y a su familia desde antes de la pandemia y siempre es un placer trabajar con ella. Muy trabajadora, confiable, eficiente, flexible y con excelentes sugerencias. Limpia con productos completamente naturales y tiene una organización maravillosa. ¡Definitivamente contraten a Olga!"',
          name: 'Tiffany P.',
          location: 'Boston, MA'
        },
        testimonial2: {
          text: '"Olga llegó a nuestra familia no como una empresa con fines de lucro. Se presentó como alguien que quería ser parte de nuestra familia. Nos ayudó con el caos en nuestra casa. No solo limpia; organiza y da ideas sobre cómo simplificar y mantener la casa libre de estrés. ¡La recomendamos ampliamente!"',
          name: 'Familia Daniel',
          location: 'Boston, MA'
        },
        testimonial3: {
          text: '"Recuerdo un día, después de una larga jornada de trabajo, llegué a casa con gripe y dificultad para respirar. En cuanto entré, sentí que mis fosas nasales se despejaron con el aroma a eucalipto de los productos de Olga. Entendí que los químicos no son buenos para nuestra salud. ¡La recomiendo ampliamente!"',
          name: 'Ricky J.',
          location: 'Boston, MA'
        },
        testimonial4: {
          text: '"Olga ha sido una ayuda increíble para mí a lo largo de los años. Tiene habilidades que yo no poseo y todos estamos agradecidos por todo lo que hace por nosotros."',
          name: 'Tricia M.',
          location: 'Boston, MA'
        },
        testimonial5: {
          text: '"¡Trabajar con Olga ha sido un placer! Trajo de vuelta la limpieza y el orden a nuestro hogar después de que tuve una operación muy seria. Es trabajadora, confiable y una excelente organizadora. ¡La recomendamos absolutamente!"',
          name: 'Lisa',
          location: 'Boston, MA'
        }
      },
      pricing: {
        tag: 'Precios',
        title1: 'Planes',
        title2: 'Simples',
        subtitle: 'Precios transparentes y accesibles.',
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
          name: 'Paquete de Suscripción',
          feature1: 'Lavandería semanal (hasta 15 lbs)',
          feature2: 'Limpieza de hogar mensual',
          feature3: 'Productos 100% naturales',
          feature4: 'Recogida y entrega',
          feature5: 'Descuento especial',
          cta: 'Elegir Plan'
        },
        enterprise: {
          name: 'Limpieza del Hogar',
          price: 'Desde $120',
          feature1: 'Hogares y apartamentos',
          feature2: 'Productos naturales',
          feature3: 'Cocina y baño incluidos',
          feature4: 'Aromaterapia incluida',
          feature5: 'Move-in / Move-out disponible',
          cta: 'Cotizar'
        }
      },
      contact: {
        tag: 'Contáctanos',
        title1: 'Programa tu',
        title2: 'Recogida',
        title3: 'Hoy',
        description: 'Agenda tu recogida de lavandería o solicita una cotización para limpieza de tu hogar o apartamento. ¡Respondemos en menos de 2 horas!',
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
          serviceOpt3: 'Limpieza del Hogar',
          serviceOpt4: 'Paquete de Suscripción',
          serviceOpt5: 'Otro',
          messageLabel: 'Mensaje',
          messagePlaceholder: '¿Cuántas libras aproximadamente? ¿Tienes alguna preferencia de aroma?',
          submit: 'Enviar Solicitud'
        }
      },
      footer: {
        tagline: 'Cleaning Earth One Home at a Time!',
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
        badge: '🪻 Natural Laundry Pickup & Delivery',
        title1: 'Laundry & Cleaning',
        titleAccent: 'Services',
        title2: 'in Boston and Surrounding areas',
        subtitle: 'We pick up, wash with 100% natural products, and deliver your clothes fresh and clean. We also clean homes and apartments.',
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
        residential: 'Home Cleaning',
        laundry: 'Laundry Delivery',
        eco: 'Eco-Friendly'
      },
      services: {
        tag: 'Our Services',
        title1: 'Laundry & Cleaning',
        title2: 'Naturally',
        subtitle: 'Laundry pickup & delivery and home/apartment cleaning. We use only natural products that care for your clothes, your health, and the environment.',
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
          price: '$2.00/lb'
        },
        laundry: {
          title: 'Home Cleaning',
          description: 'Professional cleaning for homes and apartments. Perfect for busy professionals, older adults, and anyone who needs a clean, organized space.',
          feature1: 'Homes & apartments',
          feature2: '100% natural products',
          feature3: 'Move-in / Move-out available',
          price: 'From $120'
        },
        commercial: {
          title: 'Subscription Package',
          description: 'Weekly laundry + home cleaning with pickup & delivery. The perfect all-in-one solution for a naturally clean home.',
          feature1: '🧺 Weekly laundry included',
          feature2: '🏠 Home cleaning with pickup/delivery',
          feature3: '🌿 100% natural products',
          price: 'Get Quote'
        }
      },
      about: {
        tag: 'Our Story',
        title1: 'Rooted in',
        title2: 'Mayan Traditions',
        founderName: 'Olga Piox',
        founderTitle: 'Founder',
        badge: 'Natural Tradition',
        text1: 'My name is <strong>Olga Piox</strong>. I am a native of Guatemala with indigenous Mayan roots. Lavender & Piox Natural Cleaning was born after multiple emergency room visits where I discovered I was suffering severe allergic reactions from years of using harsh chemicals for cleaning.',
        text2: 'It was time to end the painful skin eruptions and reclaim the wisdom of my ancestors who relied on Mother Nature\'s gifts.',
        text3: 'This is how I came to rely on organic recipes and disinfectant formulas from my Mayan culture. We use these products in our laundry and home cleaning services. Our clients love the freshness and healthy aromas in their clothes and homes.',
        value1: 'Sustainability',
        value2: 'Cultural Authenticity',
        value3: 'Wellbeing',
        value4: 'Transparency'
      },
      products: {
        tag: 'Natural Ingredients',
        title1: 'The Power of',
        title2: 'Nature',
        subtitle: 'We wash your clothes with pure and natural ingredients, carefully selected for their effectiveness and gentleness.',
        lavender: { name: 'Lavender', desc: 'Relaxing scent and antibacterial' },
        citrus: { name: 'Citrus', desc: 'Removes stains and odors' },
        vinegar: { name: 'Vinegar', desc: 'Natural fabric softener' },
        baking: { name: 'Baking Soda', desc: 'Gentle whitener' },
        flower: { name: 'Izote Flower', desc: 'Mayan tradition' },
        ecoTitle: 'We Care for Your Clothes & the Planet',
        ecoText: 'Our handcrafted soaps are biodegradable and gentle on fabrics. Your clothes last longer and the planet thanks you.'
      },
      testimonials: {
        tag: 'Testimonials',
        title1: 'What Our',
        title2: 'Clients Say',
        testimonial1: {
          text: '"Highly recommend Olga! I\'ve known her and her family since before the pandemic and she is always great to work with. Very hard working, trustworthy, efficient, flexible and has great suggestions. She cleans using all natural products, and has wonderful organization and packing skills. Definitely hire Olga!"',
          name: 'Tiffany P.',
          location: 'Boston, MA'
        },
        testimonial2: {
          text: '"Olga came to our family not as a profit-making company. She presented herself as someone who wants to be a member of our family. She helped us with the chaos in our house. She doesn\'t just clean; she organizes and gives ideas on how to simplify and keep our house organized and stress free. We highly recommend her!"',
          name: 'Daniel\'s Family',
          location: 'Boston, MA'
        },
        testimonial3: {
          text: '"I remember one day after a long day at the office, I came home sick with the flu and had difficulty breathing. As soon as I entered, I felt my nasal passages clear from the eucalyptus scent of Olga\'s products. I understood then that chemicals aren\'t good for our health — and sometimes we realize this too late. I highly recommend her!"',
          name: 'Ricky J.',
          location: 'Boston, MA'
        },
        testimonial4: {
          text: '"Olga has been an amazing help to me over the years. She has skills that I do not possess and we are all grateful for all she does for us."',
          name: 'Tricia M.',
          location: 'Boston, MA'
        },
        testimonial5: {
          text: '"Working with Olga has been a delight! She really brought cleanliness and order back to our home after I had a very serious operation. She is hard-working, reliable, and an excellent organizer. We would absolutely recommend her."',
          name: 'Lisa',
          location: 'Boston, MA'
        }
      },
      pricing: {
        tag: 'Pricing',
        title1: 'Simple',
        title2: 'Plans',
        subtitle: 'Transparent and affordable pricing.',
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
          name: 'Subscription Package',
          feature1: 'Weekly laundry (up to 15 lbs)',
          feature2: 'Monthly home cleaning',
          feature3: '100% natural products',
          feature4: 'Pickup & delivery',
          feature5: 'Special discount',
          cta: 'Choose Plan'
        },
        enterprise: {
          name: 'Home Cleaning',
          price: 'From $120',
          feature1: 'Homes & apartments',
          feature2: 'Natural products',
          feature3: 'Kitchen & bath included',
          feature4: 'Aromatherapy included',
          feature5: 'Move-in / Move-out available',
          cta: 'Get Quote'
        }
      },
      contact: {
        tag: 'Contact Us',
        title1: 'Schedule Your',
        title2: 'Pickup',
        title3: 'Today',
        description: 'Schedule your laundry pickup or request a quote for home/apartment cleaning. We respond in less than 2 hours!',
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
          serviceOpt3: 'Home Cleaning',
          serviceOpt4: 'Subscription Package',
          serviceOpt5: 'Other',
          messageLabel: 'Message',
          messagePlaceholder: 'Approximately how many pounds? Any scent preferences?',
          submit: 'Send Request'
        }
      },
      footer: {
        tagline: 'Cleaning Earth One Home at a Time!',
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