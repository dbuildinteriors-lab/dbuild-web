import SectionTitle from '@/components/SectionTitle';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import BeforeAfter from '@/components/BeforeAfter';
import { projects } from '@/data/content';
export const metadata = {
  title: 'Projects - DBuild Interiors Sarjapura Bangalore',
  description: 'Explore DBuild Interiors project gallery with image tiles, popup slider, modular kitchens, wardrobes, TV units, bedrooms, living rooms, office interiors, false ceiling and bathroom interiors.',
};
export default function Projects() {
  return (
    <>
      <section className="projects-hero">
        <div className="container">
          <p className="eyebrow">Our Projects</p>
          <h1 className="display-title fw-bold">Spaces We’ve Transformed</h1>
          <p className="lead">Explore premium interior project ideas across Bangalore. Click any tile to view the full image slider.</p>
        </div>
      </section>
      <section className="section gallery-section">
        <div className="container">
          <Gallery items={projects} filter search={false} />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Before / After" title="See how a space can change with the right design" center />
          <BeforeAfter />
        </div>
      </section>
      <CTA />
    </>
  );
}
