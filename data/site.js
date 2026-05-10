import menuData from '../menu/menu-data.json';

export const siteMeta = {
  brand: menuData.brand.name,
  slogan: 'Opening 1.5.2026',
  note: 'More info soon',
};

export const contactInfo = {
  email: menuData.business.email,
  location: menuData.brand.location,
};

export const legalInfo = {
  brand: menuData.brand.name,
  company: menuData.business.companyName,
  address: menuData.business.registeredAddress,
  oib: menuData.business.oib,
  mbs: menuData.business.mbs,
  registrationNumber: menuData.business.registrationNumber,
  website: menuData.business.website,
  venue: menuData.business.venue,
};
