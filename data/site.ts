export const site = {
  name: 'dbuild Interiors',
  url: 'https://dbuildinteriors.com',
  phone: '+91 9380321818',
  email: 'contactus@dbuildinteriors.com',
  whatsapp: '919380321818',
  address: 'Sarjapura, Bangalore, Karnataka',
  areas: ['Sarjapura', 'Bellandur', 'HSR Layout', 'Whitefield', 'Electronic City', 'Marathahalli', 'Outer Ring Road', 'Bangalore'],
};

export const keywords = ['Interior Designers in Bangalore', 'Interior Designers in Sarjapura', 'Modular Kitchen Bangalore', 'Wardrobe Designers Bangalore', 'Home Interiors Bangalore', 'Luxury Interiors Bangalore', 'Residential Interior Designers', 'Turnkey Interior Solutions Bangalore'];

const realImages: Record<string, string> = {
  hero: '/images/hero.jpg',
  about: '/images/about.jpg',
  'modular-kitchen': '/images/modular-kitchen.jpg',
  wardrobes: '/images/wardrobes.jpg',
  'tv-units': '/images/tv-units.jpg',
  'crockery-units': '/images/crockery-units.jpg',
  'pooja-units': '/images/pooja-units.jpg',
  'bedroom-interiors': '/images/bedroom-interiors.jpg',
  'study-units': '/images/study-units.jpg',
  'office-interiors': '/images/office-interiors.jpg',
  'false-ceiling': '/images/false-ceiling.jpg',
  lighting: '/images/lighting.jpg',
  wallpapers: '/images/wallpapers.jpg',
  'wooden-flooring': '/images/wooden-flooring.jpg',
  'bathroom-design': '/images/bathroom-design.jpg',
  'living-room': '/images/living-room.jpg',
  'recreational-spaces': '/images/recreational-spaces.jpg',
  'turnkey-interiors': '/images/turnkey-interiors.jpg',
  'portfolio-1': '/images/portfolio-1.jpg',
  'portfolio-2': '/images/portfolio-2.jpg',
  'portfolio-3': '/images/portfolio-3.jpg',
  'portfolio-4': '/images/portfolio-4.jpg',
  'portfolio-5': '/images/portfolio-5.jpg',
  'portfolio-6': '/images/portfolio-6.jpg',
};

export const img = (name: string) => realImages[name] || `/images/${name}.jpg`;
