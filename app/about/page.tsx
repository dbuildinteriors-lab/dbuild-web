import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import CTA from '@/components/CTA';
export const metadata = {
  title: 'About Us - Premium Interior Designers in Bangalore',
  description: 'Learn about DBuild Interiors, a customer-friendly interior design company serving Bangalore homes with premium turnkey interiors.',
};
export default function About() {
  return (
    <>
      <section className="section section-dark pt-5">
        <div className="container pt-5 mt-5">
          <SectionTitle eyebrow="About DBuild Interiors" title="Premium interiors designed for common families with uncommon dreams." desc="We create beautiful, functional and durable interiors for Bangalore homeowners who want a home that feels personal, organized and premium." />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Image src="/images/about.jpg" alt="DBuild Interiors design consultation in Bangalore" width={900} height={900} className="w-100 rounded-5" />
            </div>
            <div className="col-lg-6">
              <p className="eyebrow">Our story</p>
              <h2 className="display-title fw-bold">Design that balances luxury, budget and daily comfort.</h2>
              <p className="lead text-muted">
                DBuild Interiors is built with a simple idea: good interiors should be beautiful, practical and transparent. We help homeowners in Bangalore plan modular kitchens, wardrobes, TV units, bedrooms, living rooms, false ceilings, lighting and complete turnkey interiors.
              </p>
              <p>
                Our approach is customer-friendly. We explain material choices, finish options, storage planning and execution steps so every family can make confident decisions. Whether it is a compact apartment or a premium villa, we focus on clean design, strong usability and long-lasting
                finishes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Values" title="What makes our work different" center />
          <div className="row g-4">
            {['Transparent estimation', 'Practical storage planning', 'Premium material guidance', 'Clean execution coordination', 'Mobile-first customer support', 'Bangalore-focused service'].map((v) => (
              <div className="col-md-4" key={v}>
                <div className="lux-card p-4 h-100">
                  <h4>{v}</h4>
                  <p className="text-muted">We keep the process simple, clear and focused on the way your family uses the space every day.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h2 className="display-title">Our promise</h2>
            </div>
            <div className="col-lg-8">
              <p className="lead">We do not only design furniture. We plan movement, storage, light, finishes, maintenance and long-term comfort. Every design decision is made to improve your daily living experience.</p>
              <div className="video-placeholder mt-4">
                <h3>Brand Video / Factory Walkthrough Placeholder</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
