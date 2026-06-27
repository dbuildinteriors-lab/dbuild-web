import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import LeadForm from '@/components/LeadForm';
import Schema from '@/components/Schema';
import { services } from '@/data/content';
export const metadata = {
  title: 'Services - Modular Kitchen, Wardrobes & Turnkey Interiors Bangalore',
  description: 'Explore DBuild Interiors services including modular kitchen, wardrobes, TV units, false ceiling, lighting, bedroom interiors, office interiors and turnkey interiors in Bangalore.',
};
export default function Services() {
  return (
    <>
      <Schema type="service" />
      <section className="section section-dark pt-5">
        <div className="container pt-5 mt-5">
          <SectionTitle eyebrow="Interior services" title="Everything your home needs, from concept to completion" desc="Premium interior design services for homes, apartments, villas and compact commercial spaces in Bangalore." />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {services.map(([t, d, img]) => (
              <div className="col-md-6 col-xl-4" key={t}>
                <div className="lux-card h-100">
                  <Image src={img} alt={`${t} service by DBuild Interiors Sarjapura Bangalore`} width={800} height={560} className="card-img-top" />
                  <div className="p-4">
                    <h3>{t}</h3>
                    <p className="text-muted">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Lead capture" title="Tell us what you want to build" center />
          <LeadForm />
        </div>
      </section>
    </>
  );
}
