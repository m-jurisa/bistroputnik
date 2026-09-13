'use client';

import { useEffect, useRef, useState } from 'react';

const defaultTimeZone = 'Europe/Zagreb';

function getDateKey(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).formatToParts(date);
  const values = {};

  parts.forEach((part) => {
    if (part.type === 'day' || part.type === 'month' || part.type === 'year') {
      values[part.type] = part.value;
    }
  });

  return `${values.year}-${values.month}-${values.day}`;
}

function isAnnouncementVisible({
  endDate,
  startDate,
  timeZone = defaultTimeZone,
}) {
  if (!startDate) {
    return false;
  }

  try {
    const currentDate = getDateKey(new Date(), timeZone);
    return currentDate >= startDate && currentDate <= (endDate || startDate);
  } catch (error) {
    return false;
  }
}

export default function AnnouncementBar({
  endDate,
  initialVisible = false,
  label = 'Service notice',
  startDate,
  text,
  timeZone = defaultTimeZone,
}) {
  const viewportRef = useRef(null);
  const messageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const updateDateState = () => {
      setIsVisible(isAnnouncementVisible({ endDate, startDate, timeZone }));
    };

    updateDateState();
    const timer = window.setInterval(updateDateState, 30 * 60 * 1000);

    return () => window.clearInterval(timer);
  }, [endDate, startDate, timeZone]);

  useEffect(() => {
    if (!isVisible) {
      setShouldScroll(false);
      return undefined;
    }

    const updateOverflowState = () => {
      if (!viewportRef.current || !messageRef.current) {
        return;
      }

      setShouldScroll(
        messageRef.current.scrollWidth > viewportRef.current.clientWidth
      );
    };

    updateOverflowState();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateOverflowState);
      return () => window.removeEventListener('resize', updateOverflowState);
    }

    const observer = new ResizeObserver(updateOverflowState);
    observer.observe(viewportRef.current);
    observer.observe(messageRef.current);

    return () => observer.disconnect();
  }, [isVisible, text]);

  if (!text) {
    return null;
  }

  return (
    <div
      className={`holiday-announcement ${
        shouldScroll ? 'holiday-announcement--scroll' : ''
      }`}
      data-holiday-announcement
      data-end-date={endDate || startDate}
      data-start-date={startDate}
      data-time-zone={timeZone}
      role="status"
      aria-live="polite"
      aria-label={`${label}: ${text}`}
      hidden={!isVisible}
    >
      <div
        ref={viewportRef}
        className="holiday-announcement__viewport"
        data-holiday-announcement-viewport
      >
        <div className="holiday-announcement__track">
          <span
            ref={messageRef}
            className="holiday-announcement__message"
            data-holiday-announcement-message
          >
            {text}
          </span>
          <span
            className="holiday-announcement__message holiday-announcement__message--duplicate"
            aria-hidden="true"
          >
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
