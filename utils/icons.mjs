// Small set of line icons (decorative: always aria-hidden).
const P = {
  employee: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  family: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 20c0-2 .5-4.5 3-4.5 2 0 3 1.5 3 4"/>',
  investor: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  pin: '<path d="M12 21s7-6.2 7-11.500A7 7 0 0 0 5 9.500C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 17h6"/>',
  visa: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h7"/>',
  id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M14 10h4M14 14h4"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.500l2.7 2.700L16 9.5"/>',
  whatsapp: '<path d="M4 20l1.3-4A8 8 0 1 1 8.2 19z"/><path d="M9 9.500c0 3 2.5 5.5 5.5 5.5"/>',
  phone: '<path d="M5 4h4l1.5 4-2 1.500a11 11 0 0 0 6 6l1.5-2 4 1.500v4a1 1 0 0 1-1 1C10.5 20 4 13.5 4 5a1 1 0 0 1 1-1z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  network: '<path d="M12 21s-7-4.5-7-10V5l7-2 7 2v6c0 5.5-7 10-7 10z"/><path d="M12 8v6M9 11h6"/>',
  doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 13l2 2 4-4"/>',
  online: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
};
export const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${P[name] || ""}</svg>`;
