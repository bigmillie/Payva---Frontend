import { FAQItem } from "../types";

/* -------------------------------
   Regions — each country runs its own version of the referral campaign.
   Edit the settings below to change amounts, dates, images or copy.
-------------------------------- */
export const referralRegions = ["ca", "uk"] as const;
export type ReferralRegion = (typeof referralRegions)[number];

export interface ReferralTestimonial {
  firstName: string;
  location?: string;
  quote: string;
  photo?: string;
  reward?: string; // e.g. "$60 earned" or "3 referrals"
}

export interface BallerOfTheWeek {
  name: string;
  photo: string;
  referrals: number;
  earned: number;
  quote: string;
}

interface RegionSettings {
  flag: string;
  locale: string;
  name: string; // campaign name
  connection: string; // "How to make a …"
  symbol: string;
  reward: number;
  minTransfer: number;
  maxReferrals: number;
  // ISO dates (YYYY-MM-DD). Leave null until confirmed — the page then says
  // "Limited time" without dates.
  startDate: string | null;
  endDate: string | null;
  // Universal link into the app's Referral Hub. On phones it opens the app
  // straight to the Hub (after login); desktop visitors, or null here, get
  // the sheet explaining where to find the link in the app instead.
  appReferralLink: string | null;
  heroImage: string;
  heroAlt: string;
  // Slug of the matching section in the site T&Cs (utils/contents), shown
  // under "View full terms & conditions". null until that region has one.
  legalTermsSlug: string | null;
  // Real, consented customers only. Empty lists / null hide the sections
  // in production.
  testimonials: ReferralTestimonial[];
  baller: BallerOfTheWeek | null;
  // Layout samples, rendered only in local development.
  sampleTestimonials: ReferralTestimonial[];
  sampleBaller: BallerOfTheWeek;
}

const settings: Record<ReferralRegion, RegionSettings> = {
  ca: {
    flag: "/canada.png",
    locale: "en-CA",
    name: "Canada Connections",
    connection: "Canada Connection",
    symbol: "$",
    reward: 20,
    minTransfer: 200,
    maxReferrals: 5,
    startDate: null,
    endDate: null,
    appReferralLink: "https://go.payvapayment.com/dl/referrals",
    heroImage: "/assets/referral/hero-ca.webp",
    heroAlt:
      "Illustration of two friends sharing a Payva referral link, with the Toronto skyline behind them",
    legalTermsSlug: "referral-program",
    testimonials: [],
    baller: null,
    sampleTestimonials: [
      {
        firstName: "Amaka",
        location: "Toronto",
        quote:
          "I sent the link to my sister and she was already asking me which app I use.",
        photo: "/assets/woman-1.png",
        reward: "2 referrals",
      },
      {
        firstName: "Tobi",
        location: "Calgary",
        quote:
          "Dropped it in the family group chat. Three of them signed up that week.",
        photo: "/assets/man-1.jpg",
        reward: "$60 earned",
      },
      {
        firstName: "Chidi",
        location: "Winnipeg",
        quote: "My cousin was paying crazy fees. Now we both have $20.",
        photo: "/assets/man-2.jpg",
        reward: "$20 earned",
      },
      {
        firstName: "Ife",
        location: "Edmonton",
        quote: "Easiest $100 I've made. Everybody I know sends money home.",
        photo: "/assets/woman-2.png",
        reward: "$100 earned",
      },
    ],
    sampleBaller: {
      name: "Tobi A.",
      photo: "/assets/man-1.jpg",
      referrals: 5,
      earned: 100,
      quote: "I just shared it with the people I already send money with.",
    },
  },
  uk: {
    flag: "/british.png",
    locale: "en-GB",
    name: "UK Connections",
    connection: "UK Connection",
    symbol: "£",
    reward: 10,
    minTransfer: 100,
    maxReferrals: 5,
    startDate: null,
    endDate: null,
    appReferralLink: "https://go.payvapayment.com/dl/referrals",
    heroImage: "/assets/referral/hero-uk.webp",
    heroAlt:
      "Illustration of two friends sharing a Payva referral link, with the London skyline behind them",
    legalTermsSlug: null,
    testimonials: [],
    baller: null,
    sampleTestimonials: [
      {
        firstName: "Kemi",
        location: "London",
        quote:
          "I sent the link to my brother and he signed up before I finished my tea.",
        photo: "/assets/woman-1.png",
        reward: "2 referrals",
      },
      {
        firstName: "Seun",
        location: "Manchester",
        quote: "Shared it in the church group chat. Four people joined.",
        photo: "/assets/man-1.jpg",
        reward: "£40 earned",
      },
      {
        firstName: "Emeka",
        location: "Birmingham",
        quote: "My cousin was paying silly fees. Now we both got £10.",
        photo: "/assets/man-2.jpg",
        reward: "£10 earned",
      },
    ],
    sampleBaller: {
      name: "Seun O.",
      photo: "/assets/man-1.jpg",
      referrals: 5,
      earned: 50,
      quote: "Everyone I know sends money home. I just told them about Payva.",
    },
  },
};

/* -------------------------------
   Everything the page needs for one region
-------------------------------- */
export interface ReferralStep {
  number: string;
  title: string;
  body: string;
  cta?: string;
}

export const formatMoney = (campaign: { symbol: string }, amount: number) =>
  `${campaign.symbol}${amount}`;

export function isReferralRegion(value: string): value is ReferralRegion {
  return (referralRegions as readonly string[]).includes(value);
}

export function getReferralContent(region: ReferralRegion) {
  const { sampleTestimonials, sampleBaller, ...s } = settings[region];
  const isProduction = process.env.NODE_ENV === "production";

  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString(s.locale, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  const campaign = {
    ...s,
    region,
    maxEarnings: s.reward * s.maxReferrals,
    dates:
      s.startDate && s.endDate
        ? `${formatDate(s.startDate)} – ${formatDate(s.endDate)}`
        : null,
    testimonials:
      s.testimonials.length > 0 || isProduction
        ? s.testimonials
        : sampleTestimonials,
    baller: s.baller ?? (isProduction ? null : sampleBaller),
  };

  const m = (amount: number) => formatMoney(s, amount);
  const reward = m(s.reward);
  const min = `${m(s.minTransfer)}+`;
  const max = m(campaign.maxEarnings);

  const steps: ReferralStep[] = [
    {
      number: "01",
      title: "Get your link",
      body: "Your unique Payva referral link is waiting for you.",
      cta: "Get my link",
    },
    {
      number: "02",
      title: "Send it to your people",
      body: "WhatsApp. Text. Group chat. However you normally talk to them.",
      cta: "Share my link",
    },
    {
      number: "03",
      title: "They sign up",
      body: "Your friend joins Payva using your referral link.",
    },
    {
      number: "04",
      title: "They make their move",
      body: `They complete a qualifying ${min} transfer.`,
    },
    {
      number: "05",
      title: `You both get ${reward}`,
      body: `Their qualifying transfer is complete. You get ${reward}. They get ${reward}.`,
    },
  ];

  const text = (content: string) => ({ type: "text" as const, content });

  const faqs: FAQItem[] = [
    {
      question: `What is ${s.name}?`,
      answer: text(
        `${s.name} is Payva's referral programme. Refer a friend using your unique referral link. When they sign up through your link and complete a qualifying ${min} transfer, you both get ${reward}.`,
      ),
    },
    {
      question: "How do I refer someone?",
      answer: text(
        "Get your unique referral link from your Payva App and share it with your friend. They need to use your link when signing up.",
      ),
    },
    {
      question: "How much do I earn?",
      answer: text(
        `You earn ${reward} for every successful referral. You can make up to ${s.maxReferrals} successful referrals during the campaign, for a maximum of ${max}.`,
      ),
    },
    {
      question: "What does my friend need to do?",
      answer: text(
        `Your friend needs to sign up using your referral link and complete a qualifying ${min} transfer during the campaign period.`,
      ),
    },
    {
      question: "Does my friend get a reward too?",
      answer: text(
        `Yes. When the referral qualifies, you both receive ${reward}.`,
      ),
    },
    {
      question: "Can I refer more than one person?",
      answer: text(
        `Yes. You can make up to ${s.maxReferrals} successful referrals during the campaign.`,
      ),
    },
    {
      question: "What counts as a successful referral?",
      answer: text(
        `A successful referral is a person who signs up through your unique referral link and completes the qualifying ${min} transfer within the campaign period.`,
      ),
    },
    {
      question: "What happens after my friend signs up?",
      answer: text(
        "You'll be notified that they've joined. Their qualifying transfer is the final step before the referral reward is unlocked.",
      ),
    },
    {
      question: "Where can I find my referral link?",
      answer: text(
        "Your referral link is available in the Payva app. Open the app and tap the invite card on Home, or go to Profile, then Referrals.",
      ),
    },
    {
      question: `When does ${s.name} end?`,
      answer: text(
        campaign.dates
          ? `${s.name} runs from ${campaign.dates.replace(" – ", " to ")}. All qualifying referral activity must be completed within the campaign period.`
          : `${s.name} is a limited-time campaign. All qualifying referral activity must be completed within the campaign period.`,
      ),
    },
    {
      question: "Can I refer someone who already uses Payva?",
      answer: text("No. This is only for new users."),
    },
  ];

  return { campaign, steps, faqs };
}

export type ReferralContent = ReturnType<typeof getReferralContent>;
export type ReferralCampaign = ReferralContent["campaign"];
