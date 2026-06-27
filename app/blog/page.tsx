import SectionTitle from '@/components/SectionTitle';
export const metadata = {
  title: 'Interior Design Blog - DBuild Interiors',
  description: 'Future SEO blog for DBuild Interiors covering modular kitchen, wardrobes and home interior ideas in Bangalore.',
};
const posts = ['Modular Kitchen Design Ideas for Bangalore Apartments', 'How to Choose Wardrobe Materials for Long Life', 'Interior Design Cost Planning for 2BHK Homes in Bangalore'];
export default function Blog() {
  return (
    <section className="section pt-5">
      <div className="container pt-5 mt-5">
        <SectionTitle eyebrow="Blog" title="SEO blog support for future growth" desc="Use this section to publish helpful articles targeting Bangalore interior design searches." />
        {posts.map((p) => (
          <article className="lux-card blog-card p-4 mb-3" key={p}>
            <h3>{p}</h3>
            <p className="text-muted">Draft article placeholder. Add tips, images, FAQs and CTAs to improve organic SEO.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
