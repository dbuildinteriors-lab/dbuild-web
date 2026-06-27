import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import LeadForm from '@/components/LeadForm';
import { site } from '@/data/site';
export const metadata = {
  title: 'Contact DBuild Interiors - Interior Designers in Sarjapura Bangalore',
  description: 'Contact DBuild Interiors for modular kitchen, wardrobe, home interiors and turnkey interior design services in Sarjapura and Bangalore.',
};
export default function Contact() {
  return (
    <>
      <section className="section section-dark pt-5">
        <div className="container pt-5 mt-5">
          <SectionTitle eyebrow="Contact us" title="Book your free interior design consultation" desc="Share your requirements and our team will help you plan a beautiful and practical interior for your Bangalore home." />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <LeadForm />
            </div>
            <div className="col-lg-5">
              <div className="lux-card p-4 h-100">
                <h3>dbuild Interiors</h3>
                <p>{site.address}</p>
                <p>
                  <strong>Phone:</strong> {site.phone}
                </p>
                <p>
                  <strong>Email:</strong> {site.email}
                </p>
                <p>
                  <strong>Business hours:</strong>
                  <br />
                  Monday - Saturday: 9:30 AM - 7:00 PM
                  <br />
                  Sunday: By appointment
                </p>
                <p>
                  <strong>Service areas:</strong>
                  <br />
                  {site.areas.join(', ')}
                </p>
                <Link href={`https://wa.me/${site.whatsapp}`} className="btn btn-gold w-100">
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <iframe className="map" loading="lazy" src="https://www.google.com/maps?q=Dbuild%20interiors&output=embed" title="DBuild Interiors Sarjapura Bangalore map"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
