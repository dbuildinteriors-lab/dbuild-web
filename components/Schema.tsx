import { site } from '@/data/site';
export default function Schema({ type = 'local' }: { type?: 'local' | 'faq' | 'service' | 'review'; data?: any }) {
  const schema =
    type === 'local'
      ? {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: site.name,
          url: site.url,
          telephone: site.phone,
          email: site.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: site.address,
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
          },
          areaServed: site.areas,
          priceRange: '₹₹₹',
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Interior Design Services',
          provider: { '@type': 'LocalBusiness', name: site.name },
          areaServed: 'Bangalore, Sarjapura, Kerala, Kasaragod',
        };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
