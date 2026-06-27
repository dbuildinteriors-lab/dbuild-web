'use client';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  desc?: string;
};

export default function Gallery({ items, filter = true, search = false }: { items: GalleryItem[]; filter?: boolean; search?: boolean }) {
  const cats = ['All', ...Array.from(new Set(items.map((i) => i.category)))];
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef(0);
  const list = useMemo(() => items.filter((i) => (cat === 'All' || i.category === cat) && (i.title + i.category + (i.desc || '')).toLowerCase().includes(q.toLowerCase())), [items, cat, q]);
  const move = (d: number) => setIndex((v) => (v === null ? 0 : (v + d + list.length) % list.length));
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    };
    document.body.style.overflow = index !== null ? 'hidden' : '';
    addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      removeEventListener('keydown', onKey);
    };
  });
  const touchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const touchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) move(dx < 0 ? 1 : -1);
  };
  return (
    <>
      <div className="gallery-toolbar d-flex flex-column flex-lg-row gap-3 justify-content-between align-items-lg-center mb-4">
        {filter && (
          <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-lg-start">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  setIndex(null);
                }}
                className={`gallery-filter ${cat === c ? 'active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
        {search && <input className="form-control gallery-search" placeholder="Search projects..." value={q} onChange={(e) => setQ(e.target.value)} />}
      </div>
      <div className="tile-gallery">
        {list.map((it, i) => (
          <button className={`tile-card tile-${i % 7}`} key={`${it.category}-${it.title}-${i}`} onClick={() => setIndex(i)} aria-label={`Open ${it.title} image slider`}>
            <Image src={it.image} alt={`${it.title} by DBuild Interiors in Sarjapura Bangalore`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="tile-img" priority={i < 4} />
            <span className="tile-shade" />
            <span className="tile-content">
              <strong>{it.title}</strong>
              <small>{it.category}</small>
              <span>View Gallery →</span>
            </span>
          </button>
        ))}
      </div>
      {index !== null && list[index] && (
        <div className="gallery-modal" onTouchStart={touchStart} onTouchEnd={touchEnd} role="dialog" aria-modal="true" aria-label="Project image slider">
          <div className="modal-panel">
            <div className="modal-head">
              <div>
                <h3>{list[index].title}</h3>
                <p>
                  {index + 1} / {list.length} • {list[index].category}
                </p>
              </div>
              <button className="modal-close" onClick={() => setIndex(null)} aria-label="Close gallery">
                ×
              </button>
            </div>
            <div className="modal-stage">
              <button className="modal-arrow left" onClick={() => move(-1)} aria-label="Previous image">
                ‹
              </button>
              <Image src={list[index].image} alt={list[index].title} width={1500} height={950} className="modal-image" />
              <button className="modal-arrow right" onClick={() => move(1)} aria-label="Next image">
                ›
              </button>
            </div>
            <p className="modal-desc">{list[index].desc}</p>
            <div className="modal-thumbs">
              {list.map((it, i) => (
                <button key={`${it.title}-thumb-${i}`} className={i === index ? 'active' : ''} onClick={() => setIndex(i)} aria-label={`Open ${it.title}`}>
                  <Image src={it.image} alt={it.title} width={120} height={80} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
