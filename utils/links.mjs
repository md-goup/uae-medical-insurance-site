import { config, isSet } from "../config/site.config.mjs";

const digits = (n) => n.replace(/[^\d]/g, "");

// Each helper falls back to the contact page while its value is a placeholder,
// so no button ever points at an invented number or address.
export const whatsappUrl = () =>
  isSet(config.WHATSAPP_NUMBER)
    ? `https://wa.me/${digits(config.WHATSAPP_NUMBER)}?text=${encodeURIComponent(config.WHATSAPP_MESSAGE)}`
    : "/contact/";
export const phoneUrl = () =>
  isSet(config.PHONE_NUMBER) ? `tel:${config.PHONE_NUMBER.replace(/[^\d+]/g, "")}` : "/contact/";
export const emailUrl = () =>
  isSet(config.EMAIL_ADDRESS) ? `mailto:${config.EMAIL_ADDRESS}` : "/contact/";
export const networkUrl = () =>
  isSet(config.NEXTCARE_NETWORK_URL) ? config.NEXTCARE_NETWORK_URL : "/contact/";
export const applyUrl = () => config.ORIENT_APPLICATION_URL;
export const isExternal = (href) => /^https?:\/\//.test(href);
