export default function SectionTitle({ eyebrow, title, desc, center = false }: { eyebrow: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={center ? 'text-center mx-auto mb-5' : 'mb-5'} style={{ maxWidth: center ? 760 : 820 }}>
      <div className="eyebrow mb-2">{eyebrow}</div>
      <h2 className="display-5 display-title fw-bold">{title}</h2>
      {desc && <p className="lead text-muted">{desc}</p>}
    </div>
  );
}
