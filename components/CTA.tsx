import Link from 'next/link';
export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta text-center">
          <p className="eyebrow">Start your dream space</p>
          <h2 className="display-5 display-title fw-bold">Get a premium interior plan for your Bangalore home.</h2>
          <p className="lead">Share your floor plan and requirements. We will help you plan practical, beautiful and budget-aware interiors.</p>
          <Link href="/contact" className="btn btn-gold mt-2">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
