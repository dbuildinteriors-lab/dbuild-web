import { img } from './site';
export const services = [
  ['Modular Kitchen', 'Elegant kitchens with smart storage, premium finishes, quartz/granite tops and efficient work triangles.', img('modular-kitchen')],
  ['Wardrobes', 'Sliding and hinged wardrobes designed for maximum storage, clean lines and durable hardware.', img('wardrobes')],
  ['TV Units', 'Premium media walls, storage units, fluted panels and lighting to upgrade your living room.', img('tv-units')],
  ['Crockery Units', 'Display and storage units with glass, profile lights and elegant laminate/acrylic finishes.', img('crockery-units')],
  ['Pooja Units', 'Compact and premium pooja spaces with warm lighting, CNC details and easy maintenance.', img('pooja-units')],
  ['Bedroom Interiors', 'Calm bedroom designs with beds, side tables, wardrobes, lighting and wall features.', img('bedroom-interiors')],
  ['Study Units', 'Functional study tables, wall storage and ergonomic home-office corners for families.', img('study-units')],
  ['Office Interiors', 'Customer-friendly office interiors, workstations, cabins and compact commercial spaces.', img('office-interiors')],
  ['False Ceiling', 'Modern ceiling designs with coves, spotlights, profile lights and clean gypsum finishes.', img('false-ceiling')],
  ['Lighting', 'Layered lighting plans for ambience, task focus, display areas and premium mood creation.', img('lighting')],
  ['Wallpapers', 'Feature walls, textured wallpapers and decorative surfaces for quick visual transformation.', img('wallpapers')],
  ['Wooden Flooring', 'Warm wooden flooring options for bedrooms, living rooms and premium walkways.', img('wooden-flooring')],
  ['Bathroom Design', 'Vanity counters, mirror units, storage and lighting for premium bathroom makeovers.', img('bathroom-design')],
  ['Living Room Interiors', 'Complete living room design with sofas, TV units, décor walls and lighting.', img('living-room')],
  ['Recreational Spaces', 'Relaxation corners, hobby areas, entertainment walls and family-friendly spaces.', img('recreational-spaces')],
  ['Turnkey Interiors', 'End-to-end planning, material selection, execution and handover with transparent coordination.', img('turnkey-interiors')],
] as const;
export const projectCategories = ['Modular Kitchen', 'Wardrobe', 'TV Unit', 'Bedroom', 'Living Room', 'Office Interiors', 'False Ceiling', 'Bathroom Interiors'] as const;
const categoryImage: Record<string, string[]> = {
  'Modular Kitchen': ['modular-kitchen', 'portfolio-1', 'turnkey-interiors'],
  Wardrobe: ['wardrobes', 'portfolio-2', 'bedroom-interiors'],
  'TV Unit': ['tv-units', 'portfolio-3', 'living-room'],
  Bedroom: ['bedroom-interiors', 'portfolio-4', 'wardrobes'],
  'Living Room': ['living-room', 'recreational-spaces', 'portfolio-3'],
  'Office Interiors': ['office-interiors', 'study-units', 'portfolio-5'],
  'False Ceiling': ['false-ceiling', 'lighting', 'turnkey-interiors'],
  'Bathroom Interiors': ['bathroom-design', 'portfolio-6', 'wooden-flooring'],
};
export const projects = projectCategories.flatMap((cat) =>
  categoryImage[cat].map((imageName, n) => ({
    title: `${cat} Design ${n + 1}`,
    category: cat,
    image: img(imageName),
    desc: `Premium ${cat.toLowerCase()} interior solution planned for Bangalore homes.`,
  }))
);
export const testimonials = [
  { name: 'Rahul & Priya', area: 'Sarjapura', rating: 5, text: 'DBuild Interiors gave our 2BHK a premium look with practical storage and clean finishing.' },
  { name: 'Anitha R', area: 'Bellandur', rating: 5, text: 'The modular kitchen and wardrobes were planned neatly. The team explained materials and timelines clearly.' },
  { name: 'Vikram S', area: 'HSR Layout', rating: 5, text: 'Professional execution, good design suggestions and customer-friendly approach from start to handover.' },
  { name: 'Meera N', area: 'Whitefield', rating: 4, text: 'Loved the lighting, TV unit and bedroom design. The space feels modern and warm.' },
];
export const faqs = [
  ['Do you provide interior design services in Bangalore?', 'Yes. DBuild Interiors serves Bangalore and nearby areas for residential, commercial and turnkey interior projects.'],
  ['Do you handle complete turnkey interiors?', 'Yes. We support design planning, material selection, modular works, execution coordination and final handover.'],
  ['Can I get a modular kitchen and wardrobe package?', 'Yes. We create practical packages based on flat size, material preference, storage needs and budget.'],
  ['Do you support renovation projects?', 'Yes. We handle partial upgrades, kitchen renovation, wardrobes, TV units, false ceiling, lighting and full home makeovers.'],
];
