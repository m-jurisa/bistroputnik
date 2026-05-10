function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}) {
  return (
    <div className={joinClasses('space-y-4 max-w-3xl', className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title text-balance">{title}</h2>
      {description ? <p className="body-copy text-balance">{description}</p> : null}
    </div>
  );
}
