// Single editable content source (PRD §6). Everything a non-dev is likely to
// want to change lives here, so the page template holds no copy of its own.

// ---------------------------------------------------------------------------
// Event
// ---------------------------------------------------------------------------

// Event start, with an explicit UK offset. Without the offset the countdown is
// parsed in each visitor's own timezone, so anyone outside UTC+1 sees the wrong
// number. 26 Sept 2026 falls inside British Summer Time, so the offset is +01:00.
export const EVENT_DATE_ISO = '2026-09-26T14:00:00+01:00';

// Roughly how long the event runs, used to switch the countdown into its
// "happening now" state before it finally settles on the post-event message.
export const EVENT_DURATION_MINUTES = 240;

export const EVENT_DATE_LABEL = '26 Sept 2026';
export const EVENT_TIME_LABEL = '2:00 PM';
export const EVENT_VENUE_LABEL = '[Venue], Leeds';

export const TICKET_PRICE = 'Free';

// Flip to true once the lineup is public. Swaps the placeholder speaker tiles
// and the speakers blurb over to the announced versions below.
export const SPEAKERS_ANNOUNCED = false;

// ---------------------------------------------------------------------------
// Integrations
// ---------------------------------------------------------------------------

// The canonical origin, used for absolute og:url / og:image / canonical URLs.
// Social scrapers reject relative image paths, so this has to be absolute.
export const SITE_URL = 'https://findingx.builderscabal.com';

// TODO(Victor): replace with the real ticket URL once the platform is picked
// (PRD §10.2 - Luma recommended). Until this points somewhere real, every
// "Register Free" button on the site is a dead end.
export const REGISTER_URL = '';

// TODO(Victor): the newsletter provider's form-post endpoint (Mailchimp,
// Beehiiv, Buttondown all expose one). While this is empty the form refuses to
// submit and tells the visitor to email us instead, rather than faking success.
export const NEWSLETTER_ENDPOINT = '';

export const CONTACT_EMAIL = 'hi@builderscabal.com';
export const PARTNER_EMAIL = 'vo@builderscabal.com';
export const CONTACT_PHONE = '+44 7354 617100';

export const META = {
  title: 'Finding X - Living, Working & Building in the UK | BuildersCabal',
  description:
    "Honest lessons from Africans who've built thriving careers and businesses in the UK, for those still finding their footing. 26 Sept 2026, Leeds. Register free.",
};

export const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/builderscabal' },
  { label: 'X', href: 'https://x.com/builderscabal' },
  { label: 'Instagram', href: 'https://instagram.com/builderscabal' },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#partner', label: 'Partner' },
  { href: '#faq', label: 'FAQ' },
];

// ---------------------------------------------------------------------------
// Page content
// ---------------------------------------------------------------------------

export const rotatingWords = ['OPPORTUNITY', 'COMMUNITY', 'PURPOSE', 'CONFIDENCE', 'DIRECTION', 'HOME', 'PROSPERITY', 'X'];

// The widest word decides how much room the hero stamp reserves, so the box
// does not resize on every rotation.
export const longestRotatingWord = rotatingWords.reduce((a, b) => (b.length > a.length ? b : a));

export const whyCards = [
  { num: '01', title: 'Lessons, not lectures', body: "No theory, no TED-talk polish. Real people who navigated the exact journey you're on. They share what worked, what didn't, and what they'd do differently." },
  { num: '02', title: 'Your network, rebuilt', body: 'The room is the product. Founders, operators, advisors, and investors who look like you and have been where you are. Leave with relationships, not just business cards.' },
  { num: '03', title: 'The playbook, decoded', body: 'The UK job market, workplace culture, and the unwritten systems that create opportunity, explained by people who cracked them.' },
  { num: '04', title: 'A community that continues', body: "Your entry into BuildersCabal's growing UK community, where the conversations keep going long after the chairs are stacked." },
];

const placeholderSpeakers = [
  { badge: 'SOON', glyph: '?', name: 'Announced soon', role: 'Fireside guest' },
  { badge: 'SOON', glyph: '?', name: 'Announced soon', role: 'Panelist' },
  { badge: 'SOON', glyph: '?', name: 'Announced soon', role: 'Panelist' },
  { badge: 'SOON', glyph: '?', name: 'Announced soon', role: 'Panelist' },
];

// TODO(Victor): real names, roles and companies once the lineup is confirmed,
// then set SPEAKERS_ANNOUNCED to true.
const namedSpeakers = [
  { badge: 'FIRESIDE', glyph: '✕', name: '[Speaker Name]', role: '[Role], [Company]' },
  { badge: 'PANEL', glyph: '✕', name: '[Speaker Name]', role: '[Role], [Company]' },
  { badge: 'PANEL', glyph: '✕', name: '[Speaker Name]', role: '[Role], [Company]' },
  { badge: 'PANEL', glyph: '✕', name: '[Speaker Name]', role: '[Role], [Company]' },
];

export const speakers = SPEAKERS_ANNOUNCED ? namedSpeakers : placeholderSpeakers;

export const speakerBlurb = SPEAKERS_ANNOUNCED
  ? "The Africans who've built remarkable careers and companies in the UK, sharing exactly how."
  : "We're curating a lineup of Africans who've built remarkable careers and companies in the UK. Announcements drop soon. Register now and be first to know.";

export const agenda = [
  { time: '2:00 PM', title: 'Arrival & Registration', desc: 'Doors open. Coffee, good music, first conversations.' },
  { time: '2:30 PM', title: 'Welcome: Why Finding X', desc: "The story behind the room, and what we're building together." },
  { time: '3:00 PM', title: 'Fireside Chat', desc: "An unfiltered conversation with someone who's walked the full journey: relocation, restart, and building something that lasts." },
  { time: '3:45 PM', title: 'Panel: Living, Working & Building in the UK', desc: "Careers, business, money, and belonging. A panel of builders takes on the questions everyone's actually asking." },
  { time: '4:45 PM', title: 'Open Networking', desc: "The part you'll remember. Meet the room properly." },
];

const tilts = ['-1.5deg', '1deg', '-0.5deg', '1.5deg', '-1deg', '0.5deg'];

export const audiences = [
  'Recently relocated',
  'Mid-career professionals',
  'Founders & SME owners',
  'Startup operators',
  'Advisors & investors',
  'Graduate students',
].map((label, i) => ({ label, tilt: tilts[i % tilts.length] }));

export const packages = [
  {
    tier: 'COMMUNITY PARTNER', price: '£500', tag: 'Be part of the conversation.',
    bg: '#E8E8F4', fg: '#0B0B1A', shadow: '#0B0B1A', featured: false,
    benefits: ['Recognition as Community Partner', 'Logo on event materials', 'Social media recognition', '2 event passes', 'Post-event impact report inclusion'],
  },
  {
    tier: 'SUPPORTING PARTNER', price: '£1,500', tag: 'Engage the room directly.',
    bg: '#FFFFFF', fg: '#0B0B1A', shadow: '#0B0B1A', featured: true,
    benefits: ['Everything in Community', '3-5 min address to attendees', 'Exhibition space', '5 event passes', 'Featured partner spotlight', 'Branded resources to attendees'],
  },
  {
    tier: 'HEADLINE PARTNER', price: '£3,000', tag: 'Shape Finding X itself.',
    bg: '#0B0B1A', fg: '#FFFFFF', shadow: '#FF6341', featured: false,
    benefits: ['Everything in Supporting', 'Headline recognition across all assets', 'Fireside or panel speaking slot', 'Dedicated features pre & post event', 'Co-create future editions', 'Strategy session with BuildersCabal'],
  },
];

export const faqs = [
  { q: 'Who should attend Finding X?', a: 'Any African professional living in the UK, whether you landed last month or ten years ago. Recent immigrants, career professionals, founders, operators, advisors, investors, and students all belong in this room.' },
  { q: 'How much are tickets?', a: `${TICKET_PRICE}, but register early. The venue is intimate by design, and seats are limited.` },
  { q: 'I just moved to the UK. Is this too advanced for me?', a: "The opposite. You're exactly who this was built for, and the earlier you're in the journey, the more years this room can save you." },
  { q: "I've been here for years and I'm doing well. Why come?", a: "Because someone needs the lesson you learned the hard way. And because the best rooms are the ones where you're both teaching and learning." },
  { q: 'Can my organisation get involved?', a: `Yes. See Partner With Us or email ${PARTNER_EMAIL}. Partnerships start from £500 or equivalent in products and services.` },
  { q: 'Will sessions be recorded?', a: 'Highlights will be shared on @builderscabal channels, but the room stays candid.' },
  { q: "What's the dress code?", a: 'Smart casual. Come comfortable, come ready to talk.' },
];
