export const activeAnnouncementKey = null;

export const announcementArchive = {
  augustHoliday2026: {
    key: 'augustHoliday2026',
    copyKey: 'augustHoliday',
    startDate: '2026-08-15',
    endDate: '2026-08-15',
    timeZone: 'Europe/Zagreb',
  },
};

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

export function getCurrentAnnouncement() {
  return activeAnnouncementKey
    ? announcementArchive[activeAnnouncementKey] || null
    : null;
}

export function isAnnouncementVisibleOnDate(announcement, date = new Date()) {
  if (!announcement?.startDate) {
    return false;
  }

  try {
    const currentDate = getDateKey(date, announcement.timeZone || 'Europe/Zagreb');
    const endDate = announcement.endDate || announcement.startDate;

    return currentDate >= announcement.startDate && currentDate <= endDate;
  } catch (error) {
    return false;
  }
}
