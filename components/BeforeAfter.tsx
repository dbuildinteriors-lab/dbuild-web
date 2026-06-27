'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function BeforeAfter() {
  const [pos, setPos] = useState(52);
  return (
    <div className="before-after-card">
      <div className="before-after" style={{ '--pos': `${pos}%` } as React.CSSProperties}>
        <Image src="/images/portfolio-6.jpg" alt="Before interior renovation by DBuild Interiors" fill className="ba-img" />
        <div className="ba-after">
          <Image src="/images/living-room.jpg" alt="After luxury living room interior by DBuild Interiors" fill className="ba-img" />
        </div>
        <div className="ba-label before">Before</div>
        <div className="ba-label after">After</div>
        <input aria-label="Compare before and after interior design" type="range" min="8" max="92" value={pos} onChange={(e) => setPos(Number(e.target.value))} className="ba-range" />
        <div className="ba-handle" />
      </div>
      <div className="p-4">
        <span className="eyebrow">Interactive transformation</span>
        <h3 className="mt-2">Drag to compare a plain room with a premium DBuild interior finish</h3>
        <p className="text-muted mb-0">Useful for customers to understand the value of planning, lighting, storage, wall finishes and turnkey execution.</p>
      </div>
    </div>
  );
}
