import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { services, projects, testimonials, faqs } from '@/data/content';
export default function Home() {
  return (
    <>
      <Schema />
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="eyebrow">Premium interiors in Bangalore</p>
              <h1 className="display-title fw-bold">Luxury home interiors built around your lifestyle.</h1>
              <p className="lead my-4">dbuild Interiors designs modular kitchens, wardrobes, living rooms, bedrooms, office interiors and turnkey interiors with a clean, customer-friendly process.</p>
              <div className="d-flex gap-3 flex-wrap">
                <Link href="/contact" className="btn btn-gold">
                  Get Free Estimate
                </Link>
                <Link href="/projects" className="btn btn-outline-gold">
                  View Projects
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-card">
                <h4 className="font-serif">Design. Build. Deliver.</h4>
                <p>Transparent planning, premium materials, practical storage and beautiful finishing for Bangalore homes.</p>
                <div className="row text-center g-3">
                  <div className="col-4">
                    <div className="stat">50+</div>
                    <small>Design ideas</small>
                  </div>
                  <div className="col-4">
                    <div className="stat">15+</div>
                    <small>Services</small>
                  </div>
                  <div className="col-4">
                    <div className="stat">100%</div>
                    <small>Custom</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="What we do" title="Complete interior solutions for modern Bangalore homes" desc="From modular kitchen planning to full turnkey execution, every space is designed for beauty, storage, comfort and long-term usability." center />
          <div className="row g-4">
            {services.slice(0, 6).map(([t, d, img]) => (
              <div className="col-md-6 col-lg-4" key={t}>
                <div className="lux-card h-100">
                  <Image src={img} alt={`${t} in Bangalore by DBuild Interiors`} width={700} height={520} className="card-img-top" />
                  <div className="p-4">
                    <div className="service-icon mb-3">⌂</div>
                    <h4>{t}</h4>
                    <p className="text-muted">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/services" className="btn btn-outline-dark rounded-pill">
              Explore all services
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionTitle eyebrow="Why choose us" title="A premium experience from concept to handover" desc="We focus on designs that look good, work well and match real family needs." />
          <div className="row g-4">
            <div className="col-md-3">
              <h3 className="stat">01</h3>
              <h5>Customer-first planning</h5>
              <p>We listen to your lifestyle, storage needs and budget before proposing designs.</p>
            </div>
            <div className="col-md-3">
              <h3 className="stat">02</h3>
              <h5>Premium finishes</h5>
              <p>Modern color palettes, lighting, laminates, panels and hardware options.</p>
            </div>
            <div className="col-md-3">
              <h3 className="stat">03</h3>
              <h5>Space optimization</h5>
              <p>Smart layouts for compact 2BHK, 3BHK apartments and villas.</p>
            </div>
            <div className="col-md-3">
              <h3 className="stat">04</h3>
              <h5>Turnkey support</h5>
              <p>Design guidance, material planning, execution coordination and handover.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Process" title="Simple design process" center />
          <div className="row g-4">
            {['Consultation', 'Design & estimate', 'Material finalization', 'Execution & handover'].map((p, i) => (
              <div className="col-md-6 col-lg-3" key={p}>
                <div className="lux-card p-4 h-100">
                  <div className="process-num">0{i + 1}</div>
                  <h4>{p}</h4>
                  <p className="text-muted">Clear communication and guided decisions at every stage.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Featured projects" title="Recent interior design inspirations" center />
          <div className="row g-4">
            {projects.slice(0, 6).map((p) => (
              <div className="col-md-6 col-lg-4" key={p.title}>
                <div className="image-wrap">
                  <Image src={p.image} alt={p.title} width={700} height={520} className="w-100 gallery-img" />
                </div>
                <h5 className="mt-3">{p.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Customer feedback" title="Trusted by homeowners around Bangalore" center />
          <div className="row g-4">
            {testimonials.slice(0, 3).map((t) => (
              <div className="col-md-4" key={t.name}>
                <div className="lux-card p-4 h-100">
                  <div className="testimonial-avatar mb-3">{t.name[0]}</div>
                  <div className="stars">★★★★★</div>
                  <p>“{t.text}”</p>
                  <strong>{t.name}</strong>
                  <div className="text-muted small">{t.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <div className="stat">2BHK</div>
              <p>Smart packages</p>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat">3BHK</div>
              <p>Turnkey designs</p>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat">15+</div>
              <p>Interior services</p>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat">BLR</div>
              <p>Sarjapura focused</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Common questions" center />
          <div className="accordion" id="faq">
            {faqs.map(([q, a], i) => (
              <div className="accordion-item" key={q}>
                <h2 className="accordion-header">
                  <button className={`accordion-button ${i ? 'collapsed' : ''}`} data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>
                    {q}
                  </button>
                </h2>
                <div id={`faq${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#faq">
                  <div className="accordion-body">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
