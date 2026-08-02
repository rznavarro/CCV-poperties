// Minimal inline Lucide-style icons (stroke 1.75, currentColor)
const Ic = ({ size = 16, stroke = 1.75, className = '', children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
       viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
       className={className}>{children}</svg>
);

const IconCheck       = (p) => <Ic {...p}><path d="M20 6L9 17l-5-5"/></Ic>;
const IconCheckCircle = (p) => <Ic {...p}><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></Ic>;
const IconChevronDown = (p) => <Ic {...p}><path d="M6 9l6 6 6-6"/></Ic>;
const IconMenu        = (p) => <Ic {...p}><path d="M3 6h18M3 12h18M3 18h18"/></Ic>;
const IconX           = (p) => <Ic {...p}><path d="M18 6L6 18M6 6l12 12"/></Ic>;
const IconPhone       = (p) => <Ic {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Ic>;
const IconPhoneCall   = (p) => <Ic {...p}><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Ic>;
const IconTrendingDown= (p) => <Ic {...p}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></Ic>;
const IconCamera      = (p) => <Ic {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></Ic>;
const IconImage       = (p) => <Ic {...p}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></Ic>;
const IconGlobe       = (p) => <Ic {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Ic>;
const IconUsers       = (p) => <Ic {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></Ic>;
const IconFileCheck   = (p) => <Ic {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></Ic>;
const IconMessageCircle = (p) => <Ic {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></Ic>;
const IconArrowRight  = (p) => <Ic {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Ic>;
const IconStar        = (p) => <Ic stroke={0} {...p}><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></Ic>;
const IconSparkle     = (p) => <Ic {...p}><path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/></Ic>;
const IconShield      = (p) => <Ic {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Ic>;

Object.assign(window, {
  IconCheck, IconCheckCircle, IconChevronDown, IconMenu, IconX,
  IconPhone, IconPhoneCall, IconTrendingDown, IconCamera, IconImage,
  IconGlobe, IconUsers, IconFileCheck, IconMessageCircle, IconArrowRight,
  IconStar, IconSparkle, IconShield,
});
