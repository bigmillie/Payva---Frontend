export interface IQuickLinkItem {
  title: string;
  route: string;
}

export interface IQuickLink {
  title: string;
  links: IQuickLinkItem[];
}

export interface FAQAnswer {
  type: "text" | "list" | "nested";
  content: string | string[] | { title?: string; items: string[] }[];
}

export interface FAQItem {
  question: string;
  answer: FAQAnswer;
}

export interface FAQCategory {
  key: string;
  faqs: FAQItem[];
}

export type FAQAnswerMain =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "list";
      content: string[];
    }
  | {
      type: "nested";
      content: {
        title?: string;
        items: string[];
      }[];
    };

export interface FAQItemMain {
  category?: string;
  question: string;
  answer: FAQAnswerMain;
}

export interface FAQCategoryMain {
  key: string;
  category: string;
  faqs: FAQItemMain[];
}
