'use client';

import { useState } from 'react';

const openingDate = '2026-05-01';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-surface flex min-h-[28rem] flex-col justify-center space-y-5">
        <p className="eyebrow">Request sent</p>
        <h3 className="section-title max-w-lg">
          Thank you. We will reply with availability by email.
        </h3>
        <p className="body-copy max-w-xl">
          For urgent changes, contact us directly by email.
        </p>
        <button
          type="button"
          className="brand-button w-full sm:w-fit"
          onClick={() => setSubmitted(false)}
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      className="form-surface"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field sm:col-span-2">
          <span className="form-label">Name</span>
          <input className="form-input" name="name" autoComplete="name" required />
        </label>

        <label className="form-field">
          <span className="form-label">Email</span>
          <input
            className="form-input"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>

        <label className="form-field">
          <span className="form-label">Guests</span>
          <select className="form-input" name="guests" defaultValue="2" required>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((guestCount) => (
              <option key={guestCount} value={guestCount}>
                {guestCount}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field">
          <span className="form-label">Date</span>
          <input
            className="form-input"
            type="date"
            name="date"
            min={openingDate}
            required
          />
        </label>

        <label className="form-field">
          <span className="form-label">Time</span>
          <input className="form-input" type="time" name="time" required />
        </label>

        <label className="form-field sm:col-span-2">
          <span className="form-label">Note</span>
          <textarea className="form-input min-h-28 resize-y" name="note" rows="4" />
        </label>
      </div>

      <button type="submit" className="brand-button mt-7 w-full sm:w-fit">
        Send Request
      </button>
    </form>
  );
}
