'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { site } from '@/data/site';
const links = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/services', 'Services'],
  ['/projects', 'Projects'],
  ['/testimonials', 'Testimonials'],
  ['/contact', 'Contact Us'],
];
export default function Header() {
  const path = usePathname();
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const closeMenu = () => {
    const el = document.getElementById('mainNav');
    if (el?.classList.contains('show')) {
      import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bs: any) => bs.Collapse.getOrCreateInstance(el).hide());
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="/" onClick={closeMenu}>
          <Image src="/images/dbuild-logo-full.png" alt="DBuild Interiors logo" width={220} height={78} className="brand-logo-full" priority />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map(([href, label]) => (
              <li className="nav-item" key={href}>
                <Link onClick={closeMenu} className={`nav-link ${path === href ? 'active' : ''}`} href={href}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <Link onClick={closeMenu} href="/contact" className="btn btn-gold btn-sm">
                Get Free Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
