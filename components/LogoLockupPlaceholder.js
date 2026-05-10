import Image from 'next/image';

function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LogoLockupPlaceholder({ compact = false, className }) {
  if (compact) {
    return (
      <div
        className={joinClasses(
          'inline-flex items-center gap-3 rounded-full border border-brand-line/40 bg-brand-deep/55 px-4 py-2 text-brand-sand backdrop-blur-sm',
          className
        )}
      >
        <div className="relative h-9 w-[8.25rem] shrink-0">
          <Image
            src="/logo-primary.png"
            alt="Bistro Putnik logo"
            fill
            priority
            className="object-contain"
            sizes="132px"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={joinClasses(
        'panel-surface relative mx-auto flex min-h-[12.5rem] w-full max-w-[23rem] items-center justify-center overflow-hidden px-6 py-8 text-center sm:min-h-[18rem] sm:max-w-[33rem] sm:px-12 sm:py-10',
        className
      )}
    >
      <div className="absolute inset-4 rounded-md border border-brand-line/35" />
      <div className="absolute inset-x-10 top-7 h-px bg-gradient-to-r from-transparent via-brand-line/60 to-transparent" />
      <div className="absolute inset-x-10 bottom-7 h-px bg-gradient-to-r from-transparent via-brand-line/60 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,41,49,0.2)_0%,rgba(14,55,67,0)_42%,rgba(228,201,149,0.04)_100%)]" />

      <div className="relative z-10 flex w-full flex-col items-center gap-5">
        <div className="relative aspect-[1964/860] w-full max-w-[18rem] sm:max-w-[30rem]">
          <Image
            src="/logo-primary.png"
            alt="Bistro Putnik logo"
            fill
            priority
            className="object-contain"
            sizes="(min-width: 640px) 480px, 384px"
          />
        </div>
        <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#d3d8d8]">
          Baška Voda / Croatia
        </p>
      </div>
    </div>
  );
}
