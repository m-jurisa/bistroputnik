function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function BrandDivider({ className }) {
  return (
    <div className={joinClasses('flex items-center gap-4', className)}>
      <span className="soft-rule" />
      <svg
        aria-hidden="true"
        viewBox="0 0 84 20"
        className="h-4 w-20 shrink-0 text-brand-sand"
        fill="none"
      >
        <path
          d="M4 12C13 6.8 22 4.2 31 4.2C40 4.2 49 6.8 58 12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M24 17C30 14.5 36 13.2 42 13.2C48 13.2 54 14.5 60 17"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          opacity="0.72"
        />
      </svg>
      <span className="soft-rule" />
    </div>
  );
}
