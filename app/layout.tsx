import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { site, keywords } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'DBuild Interiors | Premium Interior Designers in Bangalore',
    template: '%s | DBuild Interiors',
  },
  description: 'DBuild Interiors creates luxury home interiors, modular kitchens, wardrobes, TV units, office interiors and turnkey interior solutions in Bangalore.',
  keywords,
  openGraph: {
    title: 'DBuild Interiors - Luxury Interiors Bangalore',
    description: 'Premium, customer-friendly interior design services in Bangalore.',
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
