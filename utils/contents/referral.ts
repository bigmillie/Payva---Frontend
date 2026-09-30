import { FAQItem } from "../types";

/* -------------------------------
   Campaign settings — edit these to run or update Canada Connections
-------------------------------- */
export const referralCampaign = {
  name: "Canada Connections",
  // ISO dates (YYYY-MM-DD). Leave null until the dates are confirmed —
  // the page then says "Limited time" without dates.
  startDate: null as string | null,
  endDate: null as string | null,
  reward: 20,
  minTransfer: 200,
  maxReferrals: 5,
  // Universal link into the app's referral screen (Profile → Referral).
  // The app does not handle incoming links yet; until it does, leave this
  // null and the CTA shows how to find the link in the app instead.
  appReferralLink: null as string | null,
  heroImage: "/assets/about/about-banner.png",
};

export const maxEarnings =
  referralCampaign.reward * referralCampaign.maxReferrals;

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const campaignDates =
  referralCampaign.startDate && referralCampaign.endDate
    ? `${formatDate(referralCampaign.startDate)} – ${formatDate(referralCampaign.endDate)}`
    : null;

/* -------------------------------
   How it works
-------------------------------- */
export interface ReferralStep {
  number: string;
  title: string;
  body: string;
  cta?: string;
}

export const referralSteps: ReferralStep[] = [
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
    body: "They complete a qualifying $200+ transfer.",
  },
  {
    number: "05",
    title: "You both get $20",
    body: "Their qualifying transfer is complete. You get $20. They get $20.",
  },
];

/* -------------------------------
   Social proof — real customers only
-------------------------------- */
export interface ReferralTestimonial {
  firstName: string;
  location?: string;
  quote: string;
  photo?: string;
  reward?: string; // e.g. "$60 earned" or "3 referrals"
}

// Add real, consented customer testimonials here. The section stays hidden
// in production while this list is empty.
export const referralTestimonials: ReferralTestimonial[] = [];

export interface BallerOfTheWeek {
  name: string;
  photo: string;
  referrals: number;
  earned: number;
  quote: string;
}

// Set this to the week's featured customer. null hides the section.
export const ballerOfTheWeek: BallerOfTheWeek | null = null;

// Layout samples, shown only in local development so the sections can be
// reviewed before real customers are featured. Never rendered in production.
export const sampleTestimonials: ReferralTestimonial[] = [
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
];

export const sampleBaller: BallerOfTheWeek = {
  name: "Tobi A.",
  photo: "/assets/man-1.jpg",
  referrals: 5,
  earned: 100,
  quote: "I just shared it with the people I already send money with.",
};

/* -------------------------------
   FAQs
-------------------------------- */
const text = (content: string) => ({ type: "text" as const, content });

export const referralFAQs: FAQItem[] = [
  {
    question: "What is Canada Connections?",
    answer: text(
      "Canada Connections is Payva's referral programme. Refer a friend using your unique referral link. When they sign up through your link and complete a qualifying $200+ transfer, you both get $20.",
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
      "You earn $20 for every successful referral. You can make up to five successful referrals during the campaign, for a maximum of $100.",
    ),
  },
  {
    question: "What does my friend need to do?",
    answer: text(
      "Your friend needs to sign up using your referral link and complete a qualifying $200+ transfer during the campaign period.",
    ),
  },
  {
    question: "Does my friend get a reward too?",
    answer: text("Yes. When the referral qualifies, you both receive $20."),
  },
  {
    question: "Can I refer more than one person?",
    answer: text(
      "Yes. You can make up to five successful referrals during the campaign.",
    ),
  },
  {
    question: "What counts as a successful referral?",
    answer: text(
      "A successful referral is a person who signs up through your unique referral link and completes the qualifying $200+ transfer within the campaign period.",
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
      "Your referral link is available in the Payva app. Open the app, go to Profile, then Referral.",
    ),
  },
  {
    question: "When does Canada Connections end?",
    answer: text(
      campaignDates
        ? `Canada Connections runs from ${campaignDates.replace(" – ", " to ")}. All qualifying referral activity must be completed within the campaign period.`
        : "Canada Connections is a limited-time campaign. All qualifying referral activity must be completed within the campaign period.",
    ),
  },
  {
    question: "Can I refer someone who already uses Payva?",
    answer: text("No. This is only for new users."),
  },
];
