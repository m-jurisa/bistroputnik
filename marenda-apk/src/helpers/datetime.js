function pad(value) {
  return String(value).padStart(2, "0");
}

export function getLocalDateTime(date = new Date()) {
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return {
    localDate: `${year}-${month}-${day}`,
    localTime: `${hours}:${minutes}`,
    localTimeFull: `${hours}:${minutes}:${seconds}`,
    localDateTime: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`,
    fileTime: `${hours}-${minutes}`,
    display: `${day}.${month}.${year}. ${hours}:${minutes}`
  };
}

export function formatOfferDateTime(offer) {
  if (!offer) {
    return "";
  }

  if (offer.localDate && offer.localTime) {
    return `${offer.localDate} ${offer.localTime}`;
  }

  return offer.createdAt || "";
}

export function createPdfFileName(language, localDateTime) {
  return `marenda-${language}-${localDateTime.localDate}-${localDateTime.fileTime}.pdf`;
}
