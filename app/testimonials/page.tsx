import SectionTitle from '@/components/SectionTitle';
import CTA from '@/components/CTA';
import { testimonials } from '@/data/content';
export const metadata = {
  title: 'Customer Testimonials - DBuild Interiors Bangalore',
  description: 'Read customer reviews and testimonials for DBuild Interiors interior design services in Sarjapura and Bangalore.',
};
export default function Testimonials() {
  return (
    <>
      <section className="section section-dark pt-5">
        <div className="container pt-5 mt-5">
          <SectionTitle eyebrow="Testimonials" title="Customer stories from Bangalore homeowners" desc="Review cards, star ratings, customer photo placeholders, video testimonials and before/after experience sections." />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {testimonials.map((t) => (
              <div className="col-md-6" key={t.name}>
                <div className="lux-card p-4 h-100">
                  <div className="d-flex gap-3 align-items-center mb-3">
                    <div className="testimonial-avatar">{t.name[0]}</div>
                    <div>
                      <h4 className="mb-0">{t.name}</h4>
                      <small className="text-muted">{t.area}, Bangalore</small>
                    </div>
                  </div>
                  <div className="stars">
                    {'★'.repeat(t.rating)}
                    {'☆'.repeat(5 - t.rating)}
                  </div>
                  <p className="lead">“{t.text}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <SectionTitle eyebrow="Video testimonials" title="Hear from happy customers" />
              <div className="video-placeholder">
                <h3>Customer Video Placeholder</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <SectionTitle eyebrow="Google reviews" title="Google review widget placeholder" />
              <div className="lux-card p-4">
                <div className="stars fs-3">★★★★★</div>
                <h3>4.9 average rating placeholder</h3>
                <p className="text-muted">Connect your Google Business Profile reviews here after listing DBuild Interiors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Before / After" title="Customer experience transformation" center />
          <div className="row g-4">
            <div className="col-md-6">
              <div className="lux-card p-4">
                <h3>Before</h3>
                <p>Limited storage, unused corners, plain walls and disconnected lighting.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="lux-card p-4">
                <h3>After</h3>
                <p>Smart modular storage, premium finishes, warm lighting and a comfortable family-friendly layout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
