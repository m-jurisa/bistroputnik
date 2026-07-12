import menuData from '../menu/menu-data.json';
import { legalCompanyConfig } from './legal-config';
import { siteConfig } from './site-config';

export const siteMeta = {
  brand: menuData.brand.name,
  slogan: 'Opening 1.5.2026',
  note: 'More info soon',
  url: siteConfig.siteUrl,
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
  website: siteConfig.siteUrl,
  legalCompanyWebsite: legalCompanyConfig.url,
  venue: menuData.business.venue,
};
