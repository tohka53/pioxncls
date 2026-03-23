import { Component, HostListener } from '@angular/core';

type Language = 'es' | 'en';

interface Translations {
  nav: { home: string; services: string; cleaning: string; laundry: string; about: string; products: string; contact: string; callNow: string; };
  hero: {
    title1: string; titleAccent: string; tagline: string; subtitle: string;
    hsi1: string; hsi2: string; hsi3: string; startingAt: string;
    cta1: string; cta2: string; scrollIndicator: string;
    offerEyebrow: string; offerUnit: string; offerOnly: string; offerDelivery: string;
    card1Title: string; card1f1: string; card1f2: string; card1f3: string; card1Price: string;
    card2Title: string; card2f1: string; card2f2: string; card2f3: string; card2Price: string;
    promo: string; promoCta: string; quoteBar: string;
  };
  trust: { insured: string; eco: string; satisfaction: string; minority: string; };
  features: { organic: string; residential: string; laundry: string; eco: string; };
  services: {
    tag: string; title1: string; title2: string; subtitle: string;
    flyerHouseTitle: string; flyerLaundryTitle: string;
    bookCta: string; quoteCta: string;
    residential: { title: string; description: string; feature1: string; feature2: string; feature3: string; price: string; };
    deep: { badge: string; title: string; description: string; feature1: string; feature2: string; feature3: string; price: string; };
    laundry: { title: string; description: string; feature1: string; feature2: string; feature3: string; price: string; };
    commercial: { title: string; description: string; feature1: string; feature2: string; feature3: string; price: string; };
  };
  about: { tag: string; title1: string; title2: string; founderName: string; founderTitle: string; badge: string; text1: string; text2: string; text3: string; value1: string; value2: string; value3: string; value4: string; };
  products: { tag: string; title1: string; title2: string; subtitle: string; lavender: { name: string; desc: string }; citrus: { name: string; desc: string }; vinegar: { name: string; desc: string }; baking: { name: string; desc: string }; flower: { name: string; desc: string }; ecoTitle: string; ecoText: string; };
  testimonials: { tag: string; title1: string; title2: string; testimonial1: { text: string; name: string; location: string }; testimonial2: { text: string; name: string; location: string }; testimonial3: { text: string; name: string; location: string }; testimonial4: { text: string; name: string; location: string }; testimonial5: { text: string; name: string; location: string }; };
  split: {
    cleaning: { tag: string; title: string; lead: string; f1: string; f2: string; f3: string; f4: string; price: string; cta: string; badgeTitle: string; badgeSub: string; };
    laundry:  { tag: string; title: string; lead: string; f1: string; f2: string; f3: string; f4: string; price: string; cta: string; };
    eco:      { tag: string; title: string; lead: string; f1: string; f2: string; f3: string; save: string; cta: string; badgeTitle: string; badgeSub: string; };
  };
  boston: { tag: string; title: string; sub: string; save: string; callLabel: string; note: string; };
  contact: { tag: string; title1: string; title2: string; title3: string; description: string; phoneLabel: string; emailLabel: string; locationLabel: string; locationValue: string; form: { nameLabel: string; namePlaceholder: string; emailLabel: string; emailPlaceholder: string; phoneLabel: string; phonePlaceholder: string; serviceLabel: string; servicePlaceholder: string; serviceOpt1: string; serviceOpt2: string; serviceOpt3: string; serviceOpt4: string; serviceOpt5: string; messageLabel: string; messagePlaceholder: string; submit: string; }; };
  footer: { tagline: string; slogan: string; servicesTitle: string; companyTitle: string; contactTitle: string; ourStory: string; ingredients: string; copyright: string; eco: string; insured: string; minority: string; };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  title = 'PIOX & L Natural Cleaning';
  isScrolled = false;
  menuOpen = false;
  currentLang: Language = 'en';

  translations: Record<Language, Translations> = {
    es: {
      nav: { home: 'Inicio', services: 'Lavandería', cleaning: 'Limpieza', laundry: 'Recogida', about: 'Nosotros', products: 'Productos', contact: 'Contacto', callNow: 'Llamar Ahora' },
      hero: {
        title1: 'Limpieza Natural &',
        titleAccent: 'Servicios de Lavandería',
        tagline: 'Limpieza Ecológica para Hogares y Ropa',
        subtitle: 'Recogemos, lavamos con productos 100% naturales y entregamos tu ropa fresca y limpia. También limpiamos hogares y apartamentos.',
        hsi1: 'Limpieza de Apartamentos',
        hsi2: 'Lavandería · Lavar · Secar · Doblar',
        hsi3: 'Recogida y Entrega Gratis',
        startingAt: 'Desde $120',
        cta1: '📞 Llamar o Escribir',
        cta2: 'Ver Servicios',
        scrollIndicator: 'Descubre más',
        offerEyebrow: 'Oferta Especial',
        offerUnit: 'Bolsas de Lavandería',
        offerOnly: 'Solo',
        offerDelivery: '¡Con Entrega!',
        card1Title: 'Limpieza del Hogar',
        card1f1: 'Limpieza Regular y Profunda',
        card1f2: 'Move-In / Move-Out',
        card1f3: 'Productos Naturales',
        card1Price: 'Desde $120',
        card2Title: 'Lavandería',
        card2f1: 'Lavar · Secar · Doblar',
        card2f2: 'Recogida y Entrega',
        card2f3: 'Fresca y Limpia',
        card2Price: '$2.00/lb',
        promo: '🎉 ¡20% DE DESCUENTO en tu primer servicio de limpieza o lavandería!',
        promoCta: 'Reclamar Oferta',
        quoteBar: '¡Llama o escribe para una cotización gratis!'
      },
      trust: { insured: 'Totalmente Asegurado', eco: 'Eco-Friendly', satisfaction: 'Satisfacción Garantizada', minority: 'Negocio Minority-Owned' },
      features: { organic: 'Productos Naturales', residential: 'Limpieza del Hogar', laundry: 'Lavandería a Domicilio', eco: 'Eco-Friendly' },
      services: {
        tag: 'Nuestros Servicios',
        title1: 'Lavandería y Limpieza',
        title2: 'Natural',
        subtitle: 'Servicio de lavandería a domicilio y limpieza de hogares y apartamentos. Solo productos naturales.',
        flyerHouseTitle: 'Limpieza del Hogar',
        flyerLaundryTitle: 'Servicio de Lavandería',
        bookCta: '📞 Reservar Limpieza',
        quoteCta: '🌿 Cotización Gratis',
        residential: { title: 'Lavandería a Domicilio', description: 'Recogemos tu ropa, la lavamos con jabones naturales artesanales y la entregamos fresca.', feature1: 'Recogida y entrega gratis', feature2: 'Lavado con productos naturales', feature3: 'Aromaterapia con lavanda o sin fragancia', price: '$2.00/lb' },
        deep: { badge: 'Más Popular', title: 'Wash & Fold Express', description: 'Ideal para estudiantes y profesionales ocupados. ¡Entrega en 24-48 horas!', feature1: 'Entrega en 24-48 horas', feature2: 'Doblado profesional', feature3: 'Cuidado de telas delicadas', price: '$2.00/lb' },
        laundry: { title: 'Limpieza del Hogar', description: 'Perfecto para todas las personas ocupadas, adultos mayores y personas con necesidades especiales.', feature1: 'Hogares y apartamentos', feature2: 'Productos 100% naturales', feature3: 'Move-in / Move-out disponible', price: 'Desde $120' },
        commercial: { title: 'Paquete de Suscripción', description: 'Limpieza del hogar y lavandería semanal con recogida y entrega. La solución completa.', feature1: '🏠 Limpieza del hogar semanal', feature2: '🧺 3 lavadas: ropa clara, oscura y ropa de cama', feature3: '🚗 Recogida y entrega incluidas', price: 'Cotización' }
      },
      about: { tag: 'Nuestra Historia', title1: 'Arraigados en', title2: 'Tradiciones Mayas', founderName: 'Olga Piox', founderTitle: 'Fundadora', badge: 'Tradición Natural', text1: 'Mi nombre es <strong>Olga Piox</strong>. Soy nativa de Guatemala con raíces indígenas mayas. PIOX & L Natural Cleaning nació después de múltiples visitas a emergencias donde descubrí que sufría reacciones alérgicas severas por años de usar químicos agresivos para limpiar.', text2: 'Era tiempo de terminar con las dolorosas erupciones en la piel y reclamar la sabiduría de mis ancestros que dependían de los regalos de la Madre Naturaleza.', text3: 'Así fue como llegué a depender de recetas orgánicas y fórmulas desinfectantes de mi cultura maya. Usamos estos productos en nuestros servicios de lavandería y limpieza del hogar. Nuestros clientes aman la frescura y los aromas saludables en su ropa y hogares.', value1: 'Sostenibilidad', value2: 'Autenticidad Cultural', value3: 'Bienestar', value4: 'Transparencia' },
      products: { tag: 'Ingredientes Naturales', title1: 'El Poder de la', title2: 'Naturaleza', subtitle: 'Lavamos tu ropa con ingredientes puros y naturales, seleccionados cuidadosamente por su efectividad y gentileza.', lavender: { name: 'Lavanda', desc: 'Aroma relajante y antibacterial' }, citrus: { name: 'Cítricos', desc: 'Elimina manchas y olores' }, vinegar: { name: 'Vinagre', desc: 'Suavizante natural' }, baking: { name: 'Bicarbonato', desc: 'Blanqueador suave' }, flower: { name: 'Flor de Izote', desc: 'Tradición maya' }, ecoTitle: 'Cuidamos tu Ropa y el Planeta', ecoText: 'Nuestros jabones artesanales son biodegradables y gentiles con las telas. Tu ropa dura más y el planeta te lo agradece.' },
      testimonials: { tag: 'Testimonios', title1: 'Lo que Dicen', title2: 'Nuestros Clientes', testimonial1: { text: '"¡Recomiendo mucho a Olga! La conozco a ella y a su familia desde antes de la pandemia y siempre es un placer trabajar con ella. Muy trabajadora, confiable, eficiente, flexible y con excelentes sugerencias. Limpia con productos completamente naturales. ¡Definitivamente contraten a Olga!"', name: 'Tiffany P.', location: 'Newton, MA' }, testimonial2: { text: '"Olga llegó a nuestra familia no como una empresa con fines de lucro. Se presentó como alguien que quería ser parte de nuestra familia. No solo limpia; organiza y da ideas sobre cómo simplificar y mantener la casa libre de estrés. ¡La recomendamos ampliamente!"', name: 'Familia Daniel', location: 'Chestnut Hill, MA' }, testimonial3: { text: '"Recuerdo un día, después de una larga jornada de trabajo, llegué a casa con gripe. En cuanto entré, sentí que mis fosas nasales se despejaron con el aroma a eucalipto de los productos de Olga. Entendí que los químicos no son buenos para nuestra salud."', name: 'Ricky J.', location: 'Jamaica Plain, MA' }, testimonial4: { text: '"Olga ha sido una ayuda increíble para mí a lo largo de los años. Tiene habilidades que yo no poseo y todos estamos agradecidos por todo lo que hace por nosotros."', name: 'Tricia M.', location: 'Quincy, MA' }, testimonial5: { text: '"¡Trabajar con Olga ha sido un placer! Trajo de vuelta la limpieza y el orden a nuestro hogar después de que tuve una operación muy seria. Es trabajadora, confiable y una excelente organizadora. ¡La recomendamos absolutamente!"', name: 'Lisa', location: 'Chestnut Hill, MA' } },
      contact: { tag: 'Contáctanos', title1: 'Programa tu', title2: 'Recogida', title3: 'Hoy', description: 'Agenda tu recogida de lavandería o solicita una cotización para limpieza de tu hogar. ¡Respondemos en menos de 2 horas!', phoneLabel: 'Teléfono / WhatsApp', emailLabel: 'Email', locationLabel: 'Área de Servicio', locationValue: 'Boston y alrededores', form: { nameLabel: 'Nombre Completo', namePlaceholder: 'Tu nombre', emailLabel: 'Email', emailPlaceholder: 'tu@email.com', phoneLabel: 'Teléfono', phonePlaceholder: '(617) 000-0000', serviceLabel: 'Servicio de Interés', servicePlaceholder: 'Seleccionar servicio...', serviceOpt1: 'Lavandería a Domicilio', serviceOpt2: 'Wash & Fold Express', serviceOpt3: 'Limpieza del Hogar', serviceOpt4: 'Paquete de Suscripción', serviceOpt5: 'Otro', messageLabel: 'Mensaje', messagePlaceholder: '¿Cuántas libras aproximadamente? ¿Tienes alguna preferencia de aroma?', submit: 'Enviar Solicitud' } },
      split: {
        cleaning: { tag: 'Limpieza de Apartamentos', title: 'Apartamentos y Hogares Relucientes', lead: 'Limpieza profesional con productos 100% naturales. Tu hogar quedará impecable y con aromas saludables.', f1: 'Limpieza regular y profunda', f2: 'Move-In / Move-Out disponible', f3: 'Productos naturales usados', f4: 'Cocina y baño incluidos', price: 'Desde $120', cta: '📞 Reservar Limpieza', badgeTitle: 'Hogares & Apartamentos', badgeSub: 'Desde $120' },
        laundry:  { tag: 'Servicio de Lavandería', title: 'Lavandería · Lavar · Secar · Doblar', lead: 'Recogida y entrega conveniente. Tus prendas lavadas con jabones artesanales naturales, listas en 24-48 horas.', f1: 'Lavado, secado y doblado', f2: 'Recogida y entrega a domicilio', f3: 'Fresca y limpia con lavanda', f4: '$2.00 por libra', price: '$2.00/lb', cta: '📞 Programar Recogida' },
        eco:      { tag: 'Natural & Eco-Friendly', title: 'Productos Seguros para tu Familia y el Planeta', lead: 'Usamos recetas orgánicas y fórmulas desinfectantes de la cultura maya de Olga. Seguros para niños, mascotas y el medio ambiente.', f1: 'Sin químicos agresivos', f2: 'Biodegradables y sostenibles', f3: 'Aromas naturales de lavanda y eucalipto', save: '¡Ahorra en tu primer servicio!', cta: '📞 Llamar o Escribir Hoy', badgeTitle: 'Safe & Green', badgeSub: '100% Natural' },
      },
      boston: { tag: '📍 Sirviendo al Área de Boston', title: 'Limpieza Segura y Verde', sub: 'Usamos productos naturales que son seguros para tu familia y el planeta.', save: '¡Ahorra en tu primer servicio. Llama o escribe hoy!', callLabel: 'Llamar o Escribir:', note: 'Respondemos en menos de 2 horas' },
      footer: { tagline: 'Cleaning Earth One Home at a Time!', slogan: 'Ropa Fresca, Vida Natural', servicesTitle: 'Servicios', companyTitle: 'Empresa', contactTitle: 'Contacto', ourStory: 'Nuestra Historia', ingredients: 'Ingredientes', copyright: '© 2025 PIOX & L Natural Cleaning. Todos los derechos reservados.', eco: 'Eco-Friendly', insured: 'Asegurado', minority: 'Minority-Owned Business' }
    },
    en: {
      nav: { home: 'Home', services: 'Services', cleaning: 'Cleaning', laundry: 'Laundry', about: 'About', products: 'Products', contact: 'Contact', callNow: 'Call Now' },
      hero: {
        title1: 'Laundry Services &',
        titleAccent: 'Natural Cleaning',
        tagline: 'Eco-Friendly Cleaning & Laundry Services',
        subtitle: 'We pick up, wash with 100% natural products, and deliver your clothes fresh and clean. We also clean homes and apartments.',
        hsi1: 'Apartment Cleaning',
        hsi2: 'Laundry Wash · Dry · Fold',
        hsi3: 'Free Pick-Up & Delivery',
        startingAt: 'Starting at $120',
        cta1: '📞 Call or Text',
        cta2: 'View Services',
        scrollIndicator: 'Discover more',
        offerEyebrow: 'Special Offer',
        offerUnit: 'Bags of Laundry',
        offerOnly: 'Only',
        offerDelivery: 'with Delivery!',
        card1Title: 'House Cleaning',
        card1f1: 'Regular & Deep Cleaning',
        card1f2: 'Move-In / Move-Out',
        card1f3: 'Natural Products Used',
        card1Price: 'Starting at $120',
        card2Title: 'Laundry Service',
        card2f1: 'Wash · Dry · Fold',
        card2f2: 'Pick-Up & Delivery',
        card2f3: 'Fresh & Clean',
        card2Price: '$2.00/lb',
        promo: '🎉 20% OFF YOUR FIRST CLEAN or LAUNDRY ORDER!',
        promoCta: 'Claim Offer',
        quoteBar: 'Call or Text for a Free Quote!'
      },
      trust: { insured: 'Fully Insured', eco: 'Eco-Friendly', satisfaction: 'Satisfaction Guaranteed', minority: 'Minority-Owned Business' },
      features: { organic: 'Natural Products', residential: 'Home Cleaning', laundry: 'Laundry Delivery', eco: 'Eco-Friendly' },
      services: {
        tag: 'Our Services',
        title1: 'Laundry & Cleaning',
        title2: 'Naturally',
        subtitle: 'Laundry pickup & delivery and home/apartment cleaning. Only natural products that care for your clothes, your health, and the environment.',
        flyerHouseTitle: 'House Cleaning',
        flyerLaundryTitle: 'Laundry Service',
        bookCta: '📞 Book a Cleaning',
        quoteCta: '🌿 Get a Free Quote',
        residential: { title: 'Laundry Pickup & Delivery', description: 'We pick up your clothes, wash them with handcrafted natural soaps, and deliver them fresh.', feature1: 'Free pickup & delivery', feature2: 'Washed with natural products', feature3: 'Lavender aromatherapy or unscented options', price: '$2.00/lb' },
        deep: { badge: 'Most Popular', title: 'Wash & Fold Express', description: 'Ideal for busy students and professionals. Delivery in 24-48 hours!', feature1: '24-48 hour delivery', feature2: 'Professional folding', feature3: 'Delicate fabric care', price: '$2.00/lb' },
        laundry: { title: 'Home Cleaning', description: 'Perfect for all busy individuals, older adults, and persons with special needs.', feature1: 'Homes & apartments', feature2: '100% natural products', feature3: 'Move-in / Move-out available', price: 'From $120' },
        commercial: { title: 'Subscription Package', description: 'Professional home cleaning and weekly laundry pickup, wash, dry, fold & delivery. The complete care package.', feature1: '🏠 Weekly home cleaning', feature2: '🧺 3 loads: lights, darks & linens', feature3: '🚗 Pickup & delivery included', price: 'Get Quote' }
      },
      about: { tag: 'Our Story', title1: 'Rooted in', title2: 'Mayan Traditions', founderName: 'Olga Piox', founderTitle: 'Founder', badge: 'Natural Tradition', text1: 'My name is <strong>Olga Piox</strong>. I am a native of Guatemala with indigenous Mayan roots. PIOX & L Natural Cleaning was born after multiple emergency room visits where I discovered I was suffering severe allergic reactions from years of using harsh chemicals for cleaning.', text2: 'It was time to end the painful skin eruptions and reclaim the wisdom of my ancestors who relied on Mother Nature\'s gifts.', text3: 'This is how I came to rely on organic recipes and disinfectant formulas from my Mayan culture. We use these products in our laundry and home cleaning services. Our clients love the freshness and healthy aromas in their clothes and homes.', value1: 'Sustainability', value2: 'Cultural Authenticity', value3: 'Wellbeing', value4: 'Transparency' },
      products: { tag: 'Natural Ingredients', title1: 'The Power of', title2: 'Nature', subtitle: 'We wash your clothes with pure and natural ingredients, carefully selected for their effectiveness and gentleness.', lavender: { name: 'Lavender', desc: 'Relaxing scent and antibacterial' }, citrus: { name: 'Citrus', desc: 'Removes stains and odors' }, vinegar: { name: 'Vinegar', desc: 'Natural fabric softener' }, baking: { name: 'Baking Soda', desc: 'Gentle whitener' }, flower: { name: 'Izote Flower', desc: 'Mayan tradition' }, ecoTitle: 'We Care for Your Clothes & the Planet', ecoText: 'Our handcrafted soaps are biodegradable and gentle on fabrics. Your clothes last longer and the planet thanks you.' },
      testimonials: { tag: 'Testimonials', title1: 'What Our', title2: 'Clients Say', testimonial1: { text: '"Highly recommend Olga! I\'ve known her and her family since before the pandemic and she is always great to work with. Very hard working, trustworthy, efficient, flexible and has great suggestions. She cleans using all natural products. Definitely hire Olga!"', name: 'Tiffany P.', location: 'Newton, MA' }, testimonial2: { text: '"Olga came to our family not as a profit-making company. She presented herself as someone who wants to be a member of our family. She doesn\'t just clean; she organizes and gives ideas on how to simplify and keep our house stress free. We highly recommend her!"', name: 'Daniel\'s Family', location: 'Chestnut Hill, MA' }, testimonial3: { text: '"I remember one day after a long day at the office, I came home sick with the flu. As soon as I entered, I felt my nasal passages clear from the eucalyptus scent of Olga\'s products. I understood then that chemicals aren\'t good for our health. I highly recommend her!"', name: 'Ricky J.', location: 'Jamaica Plain, MA' }, testimonial4: { text: '"Olga has been an amazing help to me over the years. She has skills that I do not possess and we are all grateful for all she does for us."', name: 'Tricia M.', location: 'Quincy, MA' }, testimonial5: { text: '"Working with Olga has been a delight! She really brought cleanliness and order back to our home after I had a very serious operation. She is hard-working, reliable, and an excellent organizer. We would absolutely recommend her."', name: 'Lisa', location: 'Chestnut Hill, MA' } },
      contact: { tag: 'Contact Us', title1: 'Schedule Your', title2: 'Pickup', title3: 'Today', description: 'Schedule your laundry pickup or request a quote for home/apartment cleaning. We respond in less than 2 hours!', phoneLabel: 'Phone / WhatsApp', emailLabel: 'Email', locationLabel: 'Service Area', locationValue: 'Boston and surrounding areas', form: { nameLabel: 'Full Name', namePlaceholder: 'Your name', emailLabel: 'Email', emailPlaceholder: 'you@email.com', phoneLabel: 'Phone', phonePlaceholder: '(617) 000-0000', serviceLabel: 'Service of Interest', servicePlaceholder: 'Select service...', serviceOpt1: 'Laundry Pickup & Delivery', serviceOpt2: 'Wash & Fold Express', serviceOpt3: 'Home Cleaning', serviceOpt4: 'Subscription Package', serviceOpt5: 'Other', messageLabel: 'Message', messagePlaceholder: 'Approximately how many pounds? Any scent preferences?', submit: 'Send Request' } },
      split: {
        cleaning: { tag: 'Apartment Cleaning', title: 'Sparkling Clean Apartments & Homes', lead: 'Professional cleaning with 100% natural products. Your home will be spotless with healthy aromas.', f1: 'Regular & Deep Cleaning', f2: 'Move-In / Move-Out Cleaning', f3: 'Natural Products Used', f4: 'Kitchen & bathroom included', price: 'Starting at $120', cta: '📞 Book a Cleaning', badgeTitle: 'Homes & Apartments', badgeSub: 'Starting at $120' },
        laundry:  { tag: 'Laundry Service', title: 'Laundry Wash · Dry · Fold', lead: 'Convenient pick-up and delivery. Your clothes washed with handcrafted natural soaps, ready in 24-48 hours.', f1: 'Wash · Dry · Fold', f2: 'Pick-Up & Delivery', f3: 'Fresh & Clean with lavender', f4: '$2.00 per pound', price: '$2.00/lb', cta: '📞 Schedule Pickup' },
        eco:      { tag: 'Natural & Eco-Friendly', title: 'Safe & Green Cleaning for Your Family', lead: 'We use organic recipes and disinfectant formulas rooted in Olga\'s Mayan culture. Safe for kids, pets, and the environment.', f1: 'No harsh chemicals', f2: 'Biodegradable & sustainable', f3: 'Natural lavender & eucalyptus aromas', save: 'Save on your first service!', cta: '📞 Call or Text Today', badgeTitle: 'Safe & Green', badgeSub: '100% Natural' },
      },
      boston: { tag: '📍 Serving the Boston Area', title: 'Safe & Green Cleaning', sub: 'We use natural products that are safe for your family and the planet.', save: 'Save on your first service. Call or text today!', callLabel: 'Call or Text:', note: 'We respond in less than 2 hours' },
      footer: { tagline: 'Cleaning Earth One Home at a Time!', slogan: 'Fresh Clothes, Natural Life', servicesTitle: 'Services', companyTitle: 'Company', contactTitle: 'Contact', ourStory: 'Our Story', ingredients: 'Ingredients', copyright: '© 2025 PIOX & L Natural Cleaning. All rights reserved.', eco: 'Eco-Friendly', insured: 'Insured', minority: 'Minority-Owned Business' }
    }
  };

  get t(): Translations { return this.translations[this.currentLang]; }

  @HostListener('window:scroll', [])
  onWindowScroll() { this.isScrolled = window.scrollY > 50; }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }

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