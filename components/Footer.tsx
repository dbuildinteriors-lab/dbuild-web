import Link from 'next/link';
import { site } from '@/data/site';
export default function Footer() {
  return (
    <footer className="footer pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h4 className="font-serif text-white">dbuild Interiors</h4>
            <p>Premium interior designers in Bangalore for modular kitchens, wardrobes, living rooms, office interiors and turnkey home interiors.</p>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="text-white">Pages</h6>
            <Link href="/about">About</Link>
            <br />
            <Link href="/services">Services</Link>
            <br />
            <Link href="/projects">Projects</Link>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="text-white">Services</h6>
            <p className="mb-1">Modular Kitchen</p>
            <p className="mb-1">Wardrobes</p>
            <p className="mb-1">Turnkey Interiors</p>
          </div>
          <div className="col-lg-3">
            <h6 className="text-white">Contact</h6>
            <p className="mb-1">{site.address}</p>
            <p className="mb-1">{site.phone}</p>
            <p>{site.email}</p>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="d-flex flex-column flex-md-row justify-content-between small">
          <span>© {new Date().getFullYear()} dbuild Interiors. All rights reserved.</span>
          <span>Interior Designers in Bangalore</span>
        </div>
      </div>
    </footer>
  );
}
