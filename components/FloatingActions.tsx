'use client';
import { useEffect, useState } from 'react';
import { site } from '@/data/site';
export default function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(scrollY > 400);
    addEventListener('scroll', f);
    f();
    return () => removeEventListener('scroll', f);
  }, []);
  return (
    <>
      <a className="float-wa" aria-label="Chat on WhatsApp" href={`https://wa.me/${site.whatsapp}?text=Hi%20DBuild%20Interiors,%20I%20need%20interior%20design%20support`}>
        <i className="bi bi-whatsapp"></i>
      </a>
      {show && (
        <button className="back-top" aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}
    </>
  );
}
