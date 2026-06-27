# DBuild Interiors - Premium Next.js Website

Tech stack: Next.js, React, TypeScript, Bootstrap 5.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Images

This version uses real remote interior images from Unsplash through the Next.js Image component. The image source mapping is available in `data/site.ts`.

For final production, replace the remote URLs with your own DBuild project photos inside `public/images` and update `data/site.ts`.

Included pages: Home, About Us, Services, Projects, Portfolio, Customer Testimonials, Contact Us, Blog.

Features: SEO metadata, sitemap, robots, Local Business schema, service schema, responsive gallery lightbox, keyboard navigation, mobile swipe, sticky navbar, mobile menu auto-close, floating WhatsApp, back-to-top, footer at bottom, Google Map embed, lead forms, FAQ, premium responsive design.

Update business details in `data/site.ts`.

## Latest update

- Replaced the previous mock/illustration style images with photorealistic local interior images.
- Images are stored inside `/public/images`, so they load locally and work after Vercel hosting.
- No Unsplash remote dependency is required for image loading.

Latest updates:

- Full DBuild Interiors logo used in the header.
- Website font changed to Montserrat using next/font.
- Logo-color theme applied using cyan/sky-blue accent.
- Portfolio page removed from navigation and sitemap.
- Project page includes responsive image tiles with popup slider, thumbnails, keyboard navigation and mobile swipe.
