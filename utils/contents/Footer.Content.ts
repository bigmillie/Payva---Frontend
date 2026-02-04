import {
  aboutPage,
  contactPage,
  faqPage,
  featurePage,
  privacyPolyPage,
  termOfUsePage,
} from "../routes";
import { IQuickLink } from "../types";

export const quickLinks: IQuickLink[] = [
  {
    title: "Features",
    links: [
      {
        title: "Instant Transfers",
        route: featurePage,
      },
      {
        title: "Receive Payments",
        route: featurePage,
      },
      {
        title: "Pay Bills",
        route: featurePage,
      },
      {
        title: "Pay Tuition",
        route: featurePage,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About Payva",
        route: aboutPage,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        title: "FAQs",
        route: faqPage,
      },
      {
        title: "Contact us",
        route: contactPage,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms and conditions",
        route: termOfUsePage,
      },
      {
        title: "Privacy policy",
        route: privacyPolyPage,
      },
    ],
  },
];
