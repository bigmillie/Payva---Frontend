import { FAQCategory, FAQCategoryMain } from "../types";

export const ourHomeFAQs: FAQCategory[] = [
  {
    key: "general",
    faqs: [
      {
        question: "What is Payva?",
        answer: {
          type: "text",
          content:
            "Payva is a licensed Canadian Money Services Business (MSB) that makes international payments simple, fast, and affordable. We support payments with secure wallets, instant payouts, transparent exchange rates, and zero transfer fees—across Canada, Nigeria, and the United Kingdom (coming soon).",
        },
      },
      {
        question: "Is my information secure?",
        answer: {
          type: "text",
          content:
            "Yes. Payva uses bank-grade encryption, secure data storage, fraud monitoring, and Persona-powered identity verification to keep your data safe.",
        },
      },
      {
        question: "How fast are transfers?",
        answer: {
          type: "text",
          content: "All transfers on Payva are instant.",
        },
      },
      {
        question: "How does Payva set exchange rates?",
        answer: {
          type: "text",
          content:
            "Payva uses live market exchange rates, updated in real time.",
        },
      },
      {
        question: "Which countries does Payva support?",
        answer: {
          type: "list",
          content: [
            "Canada 🇨🇦",
            "Nigeria 🇳🇬",
            "United Kingdom 🇬🇧 (coming soon)",
          ],
        },
      },
    ],
  },
];

export const ourFeaturesFAQs: FAQCategory[] = [
  {
    key: "features",
    faqs: [
      {
        question: "How do I track my transfer?",
        answer: {
          type: "list",
          content: [
            "Pending – We’re confirming payment",
            "Processing – Transfer is being sent to the receiving bank",
            "Completed – Recipient has received the funds",
            "Failed – Transfer did not go through (you’ll receive instructions to resolve it)",
          ],
        },
      },
      {
        question: "Funding your Wallets",
        answer: {
          type: "nested",
          content: [
            {
              title: "How do I fund my CAD wallet?",
              items: [
                "Send an Interac e-Transfer via Auto-Deposit from your Canadian bank",
                "Funds appear instantly once received",
                "Note: Third-party deposits are not allowed; deposits must come from your own account",
              ],
            },
            {
              title: "How do I fund my NGN wallet?",
              items: [
                "Send a bank transfer to your unique NGN Payva account (powered by Paga)",
              ],
            },
          ],
        },
      },
      {
        question: "Does Payva charge fees?",
        answer: {
          type: "text",
          content:
            "No. Payva charges zero transfer fees across all supported corridors.",
        },
      },
      {
        question: "How do I create an account?",
        answer: {
          type: "list",
          content: [
            "Download the Payva app on iOS or Android",
            "Register with your phone number, email, and personal details",
            "Complete KYC verification",
            "Start sending and receiving money",
          ],
        },
      },
      {
        question: "Can I cancel a transfer?",
        answer: {
          type: "text",
          content:
            "You can only cancel a transfer before it is processed or delivered. A cancellation fee will apply.",
        },
      },
    ],
  },
];

export const ourCompanyFAQs: FAQCategory[] = [
  {
    key: "company",
    faqs: [
      {
        question: "Is Payva licensed?",
        answer: {
          type: "text",
          content:
            "Yes. Payva Payment Limited is registered with FINTRAC as a Money Services Business (MSB). MSB Registration Number: C100000757.",
        },
      },
      {
        question: "What services does Payva offer?",
        answer: {
          type: "list",
          content: [
            "International money transfers (CAD / NGN / GBP – coming soon)",
            "Wallet funding",
            "Nigerian bill payments (Airtime, Data, Electricity, Cable TV)",
            "Real-time currency exchange",
            "Coming soon: Tuition payments for verified Canadian institutions",
          ],
        },
      },
      {
        question: "Why verify my account?",
        answer: {
          type: "text",
          content:
            "Verification ensures your safety, protects you from fraud, and ensures compliance with regulatory requirements.",
        },
      },
      {
        question: "How do I contact Payva Support?",
        answer: {
          type: "text",
          content:
            "Contact us at support@payvapayment.com or @PayvaPayment on all social media platforms. We are available 7 days a week.",
        },
      },
    ],
  },
];

export const ourMainFAQs: FAQCategoryMain[] = [
  {
    key: "about-payva",
    category: "About Payva",
    faqs: [
      {
        category: "About Payva",
        question: "What is Payva?",
        answer: {
          type: "text",
          content:
            "Payva is a licensed Canadian Money Services Business (MSB) that makes international payments simple, fast, and affordable. We offer secure wallets, instant payouts, transparent exchange rates, and zero transfer fees across Canada, Nigeria, and the UK (coming soon).",
        },
      },
      {
        category: "About Payva",
        question: "Is Payva licensed?",
        answer: {
          type: "text",
          content:
            "Yes. Payva Payment Limited is registered with FINTRAC as a Money Services Business (MSB). Registration Number: C100000757.",
        },
      },
      {
        category: "About Payva",
        question: "What services does Payva offer?",
        answer: {
          type: "list",
          content: [
            "International money transfers (CAD ↔ NGN, GBP ↔ NGN coming soon)",
            "Wallet funding",
            "Nigerian bill payments (Airtime, Data, Electricity, Cable TV)",
            "Real-time currency exchange",
            "Tuition payments for verified Canadian institutions (coming soon)",
          ],
        },
      },
      {
        category: "About Payva",
        question: "Who can use Payva?",
        answer: {
          type: "text",
          content:
            "Anyone aged 18 and above with a valid ID and a bank account in Canada or Nigeria can use Payva.",
        },
      },
    ],
  },

  {
    key: "supported-countries",
    category: "Supported Countries & Currencies",
    faqs: [
      {
        category: "Supported Countries & Currencies",
        question: "Which countries does Payva support?",
        answer: {
          type: "list",
          content: ["Canada", "Nigeria", "United Kingdom (coming soon)"],
        },
      },
      {
        category: "Supported Countries & Currencies",
        question: "Which currencies does Payva support?",
        answer: {
          type: "list",
          content: ["CAD", "NGN", "GBP (coming soon)"],
        },
      },
    ],
  },

  {
    key: "getting-started",
    category: "Getting Started",
    faqs: [
      {
        category: "Getting Started",
        question: "How do I create an account?",
        answer: {
          type: "list",
          content: [
            "Download the Payva app on iOS or Android",
            "Register with your phone number, email, and personal details",
            "Complete KYC verification",
            "Start sending and receiving money",
          ],
        },
      },
      {
        category: "Getting Started",
        question: "Why do I need to verify my account?",
        answer: {
          type: "text",
          content:
            "Verification ensures your safety, protects against fraud, and allows Payva to comply with regulatory requirements.",
        },
      },
      {
        category: "Getting Started",
        question: "What documents are required for verification?",
        answer: {
          type: "list",
          content: [
            "Passport",
            "Driver’s licence",
            "National ID card",
            "Residence permit",
            "Proof of address (may be required depending on region)",
          ],
        },
      },
      {
        category: "Getting Started",
        question: "Is a liveness test required?",
        answer: {
          type: "text",
          content:
            "Yes. Payva uses Persona biometric verification to confirm you are the rightful owner of your documents.",
        },
      },
      {
        category: "Getting Started",
        question: "How long does verification take?",
        answer: {
          type: "text",
          content:
            "Verification is instant for most users. Some cases may require manual review to maintain security standards.",
        },
      },
      {
        category: "Getting Started",
        question: "What happens if my verification fails?",
        answer: {
          type: "text",
          content:
            "We’ll explain why verification failed and provide instructions to help you resubmit your documents.",
        },
      },
      {
        category: "Getting Started",
        question: "Can I update my verified information?",
        answer: {
          type: "text",
          content:
            "Yes. Certain details like email address or ID documents can be updated after a compliance review.",
        },
      },
    ],
  },

  {
    key: "funding-wallets",
    category: "Funding Your Wallets",
    faqs: [
      {
        category: "Funding Your Wallets",
        question: "How do I fund my CAD wallet?",
        answer: {
          type: "list",
          content: [
            "Send an Interac e-Transfer via Auto-Deposit from your Canadian bank",
            "Funds appear instantly once received",
            "Third-party deposits are not allowed",
          ],
        },
      },
      {
        category: "Funding Your Wallets",
        question: "How do I fund my NGN wallet?",
        answer: {
          type: "text",
          content:
            "Send a bank transfer to your unique NGN Payva account powered by Paga.",
        },
      },
      // {
      //   category: "Funding Your Wallets",
      //   question: "How do I fund my GBP wallet?",
      //   answer: {
      //     type: "list",
      //     content: [
      //       "Each user receives a personal IBAN",
      //       "Send GBP via bank transfer directly to this IBAN",
      //     ],
      //   },
      // },
    ],
  },

  {
    key: "sending-money",
    category: "Sending Money & Transfers",
    faqs: [
      {
        category: "Sending Money & Transfers",
        question: "Which transfer routes does Payva support?",
        answer: {
          type: "text",
          content:
            "Payva supports CAD ↔ NGN transfers. GBP ↔ NGN transfers are coming soon.",
        },
      },
      {
        category: "Sending Money & Transfers",
        question: "How fast are transfers?",
        answer: {
          type: "text",
          content: "All transfers on Payva are instant.",
        },
      },
      {
        category: "Sending Money & Transfers",
        question: "Can I cancel a transfer?",
        answer: {
          type: "text",
          content:
            "You can cancel a transfer before it is processed or delivered. A cancellation fee may apply.",
        },
      },
      {
        category: "Sending Money & Transfers",
        question: "What information is required to add a recipient?",
        answer: {
          type: "text",
          content:
            "You’ll need the recipient’s full name, bank name, account number, and country-specific banking details.",
        },
      },
    ],
  },

  {
    key: "transfer-status",
    category: "Transfer Status & Tracking",
    faqs: [
      {
        category: "Transfer Status & Tracking",
        question: "How do I track my transfer?",
        answer: {
          type: "nested",
          content: [
            {
              title:
                "You can track all transfers directly in the app. Each transfer displays one of the following statuses:",
              items: [
                "Pending: We’re confirming payment.",
                "Processing: Transfer is being sent to the receiving bank.",
                "Completed: Recipient has received the funds.",
                "Failed: Transfer did not go through (you’ll receive instructions to resolve it).",
              ],
            },
          ],
        },
      },
      {
        category: "Transfer Status & Tracking",
        question:
          "What should I do if my recipient hasn’t received the funds sent?",
        answer: {
          type: "text",
          content:
            "Confirm the account details and check the transfer status. If still unresolved, contact Payva  Support (support@payvapayment.com) with your transaction reference.",
        },
      },
      {
        category: "Transfer Status & Tracking",
        question: "Why is my transfer delayed?",
        answer: {
          type: "text",
          content:
            "Your transfers could be delayed due to compliance checks, incorrect details, receiving bank delays, or high network traffic.",
        },
      },
    ],
  },

  {
    key: "bill-payment-nigeria",
    category: "Bill Payment (Nigeria)",
    faqs: [
      {
        category: "Bill Payment (Nigeria)",
        question: "What bills can I pay with Payva?",
        answer: {
          type: "text",
          content:
            "Payva supports instant payment of Nigerian airtime, data, electricity bills, and cable TV subscriptions.",
        },
      },
      {
        category: "Bill Payment (Nigeria)",
        question: "Are bill payments instant?",
        answer: {
          type: "text",
          content: "Yes, payments for bills are processed immediately.",
        },
      },
    ],
  },
  {
    key: "exchange-rates",
    category: "Exchange Rates",
    faqs: [
      {
        category: "Exchange Rates",
        question: "How does Payva set exchange rates?",
        answer: {
          type: "text",
          content: "Payva uses live market rates, updated in real time.",
        },
      },
      {
        category: "Exchange Rates",
        question: "Do exchange rates change?",
        answer: {
          type: "text",
          content:
            "Yes, rates fluctuate based on global markets, but we always ensure the rates are favourable to you. Try out our exchange rate converter.",
          link: {
            label: "Exchange rate converter",
            href: "/#exchange-calculator",
          },
        },
      },
    ],
  },

  {
    key: "fees-limits",
    category: "Fees & Limits",
    faqs: [
      {
        category: "Fees & Limits",
        question: "Does Payva charge fees?",
        answer: {
          type: "text",
          content:
            "No. Payva charges zero fees across all supported corridors.",
        },
      },
      {
        category: "Fees & Limits",
        question: "What are the transfer limits?",
        answer: {
          type: "nested",
          content: [
            {
              title: "CAD Limits",
              items: [
                "Per transaction: $5,000",
                "Daily: $10,000",
                "Weekly: $30,000",
                "Monthly: $60,000",
              ],
            },
            {
              title: "NGN Limits",
              items: [
                "Per transaction: ₦5,000,000",
                "Daily: ₦10,000,000",
                "Weekly: ₦30,000,000",
                "Monthly: ₦60,000,000",
              ],
            },
            {
              title: "GBP Limits",
              items: [
                "Per transaction: £1,000",
                "Daily: £3,000",
                "Weekly: £10,000",
                "Monthly: £20,000",
              ],
            },
          ],
        },
      },
      {
        category: "Fees & Limits",
        question: "How can I increase my transfer limits?",
        answer: {
          type: "text",
          content:
            "Submit additional documents such as proof of income, bank statements, or source-of-funds  declarations for compliance review.",
        },
      },
      {
        category: "Fees & Limits",
        question: "How do I get a receipt?",
        answer: {
          type: "text",
          content:
            "Go to Dashboard → Transaction History → Select transaction → Download",
        },
      },
    ],
  },

  {
    key: "troubleshooting-common-issues",
    category: "Troubleshooting & Common Issues",
    faqs: [
      {
        category: "Troubleshooting & Common Issues",
        question: "Why am I not receiving my OTP?",
        answer: {
          type: "text",
          content:
            "Ensure your number is active, SMS is enabled, and your device is not blocking messages. Disable VPN if necessary.",
        },
      },
      {
        category: "Troubleshooting & Common Issues",
        question: "Why was my transaction declined?",
        answer: {
          type: "text",
          content:
            "Possible reasons include incorrect details, verification not completed, exceeded limits, or compliance-related issues.",
        },
      },
      {
        category: "Troubleshooting & Common Issues",
        question: "What if my deposit hasn’t shown up?",
        answer: {
          type: "text",
          content:
            "Share your deposit receipt with support (support@payvapayment.com).",
        },
      },
    ],
  },

  {
    key: "account-security",
    category: "Account & Security",
    faqs: [
      {
        category: "Account & Security",
        question: "Can I use Payva on multiple devices?",
        answer: {
          type: "text",
          content:
            "No. To protect your account, you can only be logged in on one device at a time.",
        },
      },
      {
        category: "Account & Security",
        question: "How do I reset my password or PIN?",
        answer: {
          type: "text",
          content:
            "Go to Profile → Security, select Password or Transaction PIN, and follow the reset instructions.",
        },
      },
      {
        category: "Account & Security",
        question: "Can I change my email?",
        answer: {
          type: "text",
          content:
            "Yes. Changes are subject to compliance approval and will be reflected within 7–14 business days.",
        },
      },
      {
        category: "Account & Security",
        question: "Can I change my phone number?",
        answer: {
          type: "text",
          content:
            "This feature isn't available yet but will be added in a future update.",
        },
      },
      {
        category: "Account & Security",
        question: "How do I enable or disable biometrics login?",
        answer: {
          type: "text",
          content:
            "Navigate to Profile → Settings → Biometrics and toggle the option.",
        },
      },
      {
        category: "Account & Security",
        question: "How do I delete my account?",
        answer: {
          type: "text",
          content:
            "To delete your account, go to Profile and select delete account at the bottom of the profile menu. Please note: Account deletion is permanent. You'll need to create a new account if you want to use Payva again.",
        },
      },
    ],
  },

  {
    key: "security-compliance",
    category: "Compliance & Safety",
    faqs: [
      {
        category: "Compliance & Safety",
        question: "Is my information secure?",
        answer: {
          type: "text",
          content:
            "Yes. Payva uses bank-grade encryption, secure data storage, fraud monitoring, and Persona-powered identity verification.",
        },
      },
      {
        category: "Compliance & Safety",
        question: "How can I contact Payva support?",
        answer: {
          type: "text",
          content:
            "You can contact Payva Support at support@payvapayment.com or via @PayvaPayment on all social media channels. Support is available 7 days a week.",
        },
      },
    ],
  },
];

export const ourFeatures = [
  {
    title: "Enjoy Instant Transfers",
    imageUrl: "/assets/instant-transfer.png",
    tag: "Coming Soon",
    description:
      "Sending money across borders shouldn’t take days or hours. With Payva, your funds move instantly between Nigeria, Canada, and the UK—with zero fees, no delays, no friction.",
    points: [
      "Instant auto-conversion from CAD or GBP to Naira.",
      "Transparent rates, so you always know exactly what they’ll receive.",
      "Perfect for putting a smile on your loved ones’ faces—in their time of need and on the days worth celebrating.",
    ],
  },
  {
    title: "Receive Money Easily",
    imageUrl: "/assets/receive-money.png",
    tag: "Coming Soon",
    description:
      "Whether you’re in Nigeria or abroad, get funds straight into your Payva wallet instantly. It’s fast, seamless, and built for everyday needs.",
    points: [
      "No middlemen or third-party apps.",
      "Perfect for students, creatives, and families.",
      "Instant notifications, so you never miss a credit alert.",
    ],
  },
  {
    title: "Pay Bills on the Go",
    imageUrl: "/assets/pay-bills.png",
    tag: "Coming Soon",
    description:
      "Stay connected to your friends and family. Pay their essential bills from the app instantly, so they’re never left without electricity, internet, airtime, or their favorite shows.",
    points: [
      "Handle electricity, internet, TV, and data bills in one place.",
      "Transparent billing and instant confirmation.",
      "Easily support family and friends in Nigeria.",
    ],
  },
  {
    title: "Pay Tuition Abroad Directly",
    imageUrl: "/assets/pay-tuition.png",
    tag: "Coming Soon",
    description:
      "Pay tuition directly to verified Canadian schools in just a few taps. Fast, secure, and stress-free—giving students and families peace of mind, no matter the distance.",
    points: [
      "No need for agents or bank queues.",
      "Best exchange rates and full visibility before payment.",
      "Easy for parents, students, and sponsors to handle fees.",
    ],
  },
];

export const payvaPrivacyPolicy = [
  {
    category: "Introduction",
    key: "introduction",
    sections: [
      {
        title: "Overview",
        slug: "overview",
        content: `
Payva Payment Limited (**“Payva,” “we,” “us,” “our”**) is committed to protecting your privacy and safeguarding your **Personal Information**.

This Privacy Policy explains how we collect, use, store, and disclose personal information when you use our:
- Mobile application
- Website
- Financial and payment services
        `,
      },
      {
        title: "Consent",
        slug: "consent",
        content: `
By using Payva’s services, you **consent** to the practices described in this Privacy Policy.

If you do **not** agree with this policy, you should discontinue use of our services.
        `,
      },
    ],
  },

  {
    category: "Scope of This Policy",
    key: "scope",
    sections: [
      {
        title: "Who This Policy Applies To",
        slug: "applicability",
        content: `
This Privacy Policy applies to:

- Payva customers in **Canada, the United Kingdom, and Nigeria**
- Visitors to our website or mobile application
- Senders and recipients of remittances
- Individuals whose personal data is processed by Payva
        `,
      },
      {
        title: "Exclusions",
        slug: "exclusions",
        content: `
This policy **does not apply** to third-party websites, services, or platforms not controlled by Payva.

We encourage you to review the privacy policies of any third-party services you use.
        `,
      },
    ],
  },

  {
    category: "Information We Collect",
    key: "data-collection",
    sections: [
      {
        title: "Information You Provide Directly",
        slug: "direct-information",
        content: `
We may collect the following information when you register or use our services:

- Full legal name
- Date of birth
- Email address and phone number
- Residential address
- Employment information
- Identification documents (KYC)
- Biometric verification data
- Bank or payment details
- Customer support communications
        `,
      },
      {
        title: "Information Collected Automatically",
        slug: "automatic-collection",
        content: `
When you use our services, we may automatically collect:

- Device identifiers
- IP address
- Browser and operating system details
- Usage logs and timestamps
- Geo-location data (where permitted)
- Cookies and similar tracking technologies
        `,
      },
      {
        title: "Information from Third Parties",
        slug: "third-parties",
        content: `
We may receive information from:

- Identity verification providers
- AML / KYC vendors
- Banks and payment partners
- Fraud detection agencies
- Regulatory or government authorities
        `,
      },
    ],
  },

  {
    category: "How We Use Your Information",
    key: "usage",
    sections: [
      {
        title: "Service Delivery",
        slug: "service-delivery",
        content: `
We use personal information to:

- Create and manage user accounts
- Verify identity
- Process remittances
- Prevent fraud and unauthorized activity
- Provide customer support
- Improve and optimize our services
        `,
      },
      {
        title: "Legal Compliance",
        slug: "legal-compliance",
        content: `
We process data to comply with:

- AML / CFT regulations
- Sanctions screening
- Financial reporting requirements
- Regulatory and law-enforcement requests
        `,
      },
      {
        title: "Communications and Marketing",
        slug: "communications",
        content: `
We may send:

- Transaction notifications
- Security alerts
- Service updates
- Marketing communications (**only where consent is provided**)

You may withdraw marketing consent at any time.
        `,
      },
    ],
  },

  {
    category: "Data Retention & Security",
    key: "security",
    sections: [
      {
        title: "Retention",
        slug: "retention",
        content: `
We retain personal information **only as long as necessary** for:

- Service delivery
- Legal and regulatory compliance
- AML / CFT obligations

Typical retention periods range from **5–7 years**.
        `,
      },
      {
        title: "Security Measures",
        slug: "security-measures",
        content: `
Payva implements industry-standard security controls, including:

- Data encryption
- Secure data centers
- Role-based access controls
- Multi-factor authentication
- Continuous monitoring
- Regular security audits
        `,
      },
    ],
  },

  {
    category: "Contact & Updates",
    key: "contact",
    sections: [
      {
        title: "Contact Information",
        slug: "contact-information",
        content: `
If you have questions, concerns, or data access requests, please contact Payva using the email provided in our official communications.
        `,
      },
      {
        title: "Policy Updates",
        slug: "policy-updates",
        content: `
We may update this Privacy Policy from time to time.

Continued use of our services after updates constitutes acceptance of the revised policy.
        `,
      },
    ],
  },
];

export const payvaTermsConditions = [
  {
    key: "introduction",
    category: "Introduction",
    sections: [
      {
        title: "Agreement Overview",
        slug: "agreement-overview",
        content: `These Terms and Conditions ("Agreement") govern your use of the services offered by Payva Payment Limited ("Payva," "we," "us," or "our").

By opening, registering, or using a Payva Account, or by using any aspect of the Services, you agree to be bound by the terms of this Customer Agreement and consent to receive all communications relating to the Services or your Payva Account in electronic form.

**Important Notes:**
- You are strongly encouraged to read this Agreement carefully before registering for or using the Services
- We recommend that you retain a copy of this Agreement for your personal reference
- Your ability to access and use our Services is strictly conditional upon your acceptance of this Customer Agreement
- By using the Services, you also agree to comply with our Privacy Policy and Acceptable Use Policy`,
      },
      {
        title: "Definitions",
        slug: "definitions",
        content: `**Agreement**: These Terms of Use together with the Privacy Policy.

**Data**: All information submitted, collected, or processed by or on your behalf through use of the Services.

**Data Protection Laws**: All applicable privacy and data protection laws and regulations, including Canadian laws such as PIPEDA and the Canadian Anti-Spam Legislation.

**Personal Information**: Information relating to an identified or identifiable natural person, as defined by applicable Data Protection Laws.

**Payva App**: The mobile application software and associated data provided to you to enable access to and use of the Services.

**Payva Wallet**: The non-interest-bearing virtual account maintained by Payva on your behalf, from which Remittances are made to your Recipients.

**Payva Website**: The website located at https://www.payvapayment.com/

**Privacy Policy**: The policy outlining how we collect, process, and use your personal information.

**Processing**: Any operation performed on Personal Information, whether automated or not, including collection, recording, organization, structuring, storage, alteration, retrieval, consultation, use, disclosure, dissemination, alignment, restriction, erasure, or destruction.

**Recipient**: The individual or entity to whom you send funds using the Services.

**Remittance**: The transfer of funds that you request and authorize us to process for payment to your Recipient.`,
      },
    ],
  },
  {
    key: "eligibility",
    category: "Eligibility",
    sections: [
      {
        title: "Eligibility Requirements",
        slug: "eligibility-requirements",
        content: `To qualify for use of our Services, you must:
- Be at least 18 years of age
- Possess the legal capacity to enter into binding agreements in your jurisdiction
- Not be located in a country where such use is prohibited by law

**Important Representations:**

You represent and warrant that, as an individual user, you are:
- Acting solely on your own behalf and for your own benefit
- Not acting on behalf of any third-party principal or beneficiary
- Using the Services exclusively for your own transactions and not on behalf of any other individual or entity`,
      },
    ],
  },
  {
    key: "services",
    category: "The Services",
    sections: [
      {
        title: "Payva Account Obligations",
        slug: "account-obligations",
        content: `To use some or all of the Services, you must first create a Payva Account by providing certain required information.

**Your Responsibilities:**
- All information you provide during registration or at any subsequent time must be accurate, complete, and truthful
- You are responsible for maintaining updated personal information including home address, email address, telephone number, and other contact details
- All activities conducted through your Payva Account will be treated as actions of the registered user
- You are responsible for any actions taken through your Account unless you have closed the Account or reported unauthorized use

**Account Ownership:**
As between you and any third party (including an employer), your Account belongs solely to you. If your access to a Service was purchased by a third party, the paying party may control access and receive usage reports; however, they do not have rights over your personal Account.

**Service Availability:**
We may refuse to provide, or may suspend or discontinue providing, the Services to you for any reason at any time.`,
      },
      {
        title: "Limited License",
        slug: "limited-license",
        content: `Subject to the terms of this Agreement, you are granted a limited, non-exclusive, non-transferable, non-sublicensable, and freely revocable license to use the Resources for your personal, non-commercial use, as enabled by the features of the Service.

**Intellectual Property:**
- All rights not expressly granted are reserved by the Company
- Payva may revoke this license at any time, with or without cause
- Payva and its licensors retain all rights, title, and interest in and to the Services, including all associated intellectual property rights
- Any updates, enhancements, corrections, or modifications are considered part of the Services and are subject to this Agreement
- You agree to keep the Services free of liens, encumbrances, or security interests`,
      },
      {
        title: "Type of Service, Eligibility, and Account Access",
        slug: "service-type-access",
        content: `**Account Limitations:**
- You may maintain only one Payva Account, where your Available Balance will be held
- Your Remittance Services will not be activated until we have received the required information to verify your identity and comply with applicable Customer Due Diligence obligations

**Important Notes:**
- Remittance Services are not a banking or credit product
- You must ensure that your Available Balance is sufficient to cover your Transactions and any applicable Fees
- If a Transaction exceeds your Available Balance, you must immediately repay the excess amount, and we may stop any pending or future Transactions
- This Agreement grants you no rights against any payment scheme providers, affiliates, or third parties
- If funds are credited to your Account due to an error, we may automatically deduct the excess amount

**Access Requirements:**
- Only persons aged 18 or older may register for Remittance Services
- Each time you attempt to access your Account, you will be required to enter your Access Codes
- If the correct codes are entered, we will assume you are the individual authorizing the instructions or Transactions
- We may refuse to act on any instruction that is unclear, appears unauthorized, may cause us to violate a legal obligation, or appears to be connected to an unlawful purpose`,
      },
      {
        title: "Prohibited Activities",
        slug: "prohibited-activities",
        content: `You may not:

1. Intentionally interfere with service to any user, host, or network, including by submitting viruses, overloading, flooding, spamming, or causing system failures
2. Modify, translate, reverse-engineer, decompile, or disassemble the Services
3. Bypass any system restrictions
4. Sell, lease, loan, transfer, distribute, license, or otherwise grant rights in the Services
5. Remove proprietary notices or markings
6. Create links, frames, or mirrored versions of the Services
7. Create, transmit, store, or process Data that you do not have the lawful right to handle or that violates applicable laws or infringes third-party rights`,
      },
      {
        title: "Use of the Remittance Services",
        slug: "remittance-usage",
        content: `**Account Access:**
You may access your Account via the Payva App to view your Transaction history, including dates, currencies, fees, and exchange rates. This information is always available and may be stored or reproduced.

**Transaction Rules:**
- You may use the Remittance Services up to the amount of your Available Balance
- If your Available Balance is insufficient, we will not allow you to combine payment methods
- Each Transaction value and applicable fee will be deducted from your Available Balance
- Once you authorize a Transaction, it cannot be withdrawn or revoked after it is received by us

**Compliance:**
- You may use the Remittance Services only for lawful purposes and must comply with all applicable laws and regulations
- You may not use the Remittance Services to transfer or receive funds on behalf of any other person or entity`,
      },
      {
        title: "Account Security And Privacy Obligations",
        slug: "security-privacy",
        content: `We do not disclose your personal information, including your account details, postal address, or email address to any third party except where required by law or as provided in our Privacy Policy.`,
      },
    ],
  },
  {
    key: "acceptable-use",
    category: "Acceptable Use",
    sections: [
      {
        title: "Compliance with Laws",
        slug: "compliance",
        content: `You agree not to use the Services for any unlawful purpose or in any manner that violates applicable local, national, or international laws or regulations.

You also agree to cooperate with Payva in any investigation relating to your compliance with applicable laws.`,
      },
      {
        title: "Prohibited Uses",
        slug: "prohibited-uses",
        content: `You must not use the Services for transactions involving or facilitating:

**a. Financial Crimes:**
- Money laundering
- Terrorist financing
- Tax evasion
- Fraud
- Any other form of financial crime

**b. Illegal Products and Services:**
- Distribution of illegal substances
- Counterfeit or unauthorized goods
- Unlicensed financial services

**c. Harmful Activities:**
- The harm or attempted harm of minors in any way

**d. Regulated Activities:**
- Adult content
- Gambling
- Escrow services
- Any activity involving individuals subject to international sanctions`,
      },
      {
        title: "Suspension and Termination",
        slug: "suspension-termination",
        content: `If Payva determines that you have breached this Agreement in your use of the Services, we may take any of the following actions:

**a.** Immediately or permanently suspend your Payva Wallet and your right to use the Services

**b.** Suspend or cancel pending Remittances or take any other action we deem necessary

**c.** Issue a warning

**d.** Initiate legal action, including proceedings to recover all costs on a full indemnity basis, and disclose relevant information to law enforcement authorities`,
      },
    ],
  },
  {
    key: "security",
    category: "Security & Privacy",
    sections: [
      {
        title: "Privacy Notice",
        slug: "privacy-notice",
        content: `**Your Responsibilities:**

You are responsible for maintaining the security and control of all IDs, passwords, and other credentials used to access your Payva Account and the Services.

**Critical Security Rules:**
- You must never disclose your Payva Account password or customer reference number to anyone
- Payva will never request your password
- If anyone asks for your password, notify us immediately
- Do not permit anyone to access your Payva Account or observe your login activities

**If Your Account is Compromised:**

If you suspect that your Payva Account, password, login details, or any other security credentials have been stolen, lost, used without authorization, or otherwise compromised:
1. Change your password immediately
2. Contact Customer Support
3. Review your transaction history regularly
4. Notify Customer Support immediately if you notice any suspicious activities

Unauthorized access could allow third parties to access your bank account or initiate unauthorized transactions. Promptly contacting us helps reduce your risk of loss.

**Email Security:**
- Ensure your email account is secure and accessible only by you
- Your email may be used to reset your Payva Account password or communicate security-related information
- Notify Customer Support immediately if your email account becomes compromised
- Avoid using device or browser functions that store or auto-fill passwords

**Additional Requirements:**
We may take actions, including suspending or restricting your Account if we suspect security risks, unauthorized use, or fraud. Additional security requirements may apply to certain Payva products or Services, and you must comply with any such requirements.`,
      },
      {
        title: "Know Your Customer (KYC) And Anti-Money Laundering (AML)",
        slug: "kyc-aml",
        content: `All users of Payva's money transfer services must satisfy mandatory KYC/AML requirements.

**Information Disclosure:**

Payva may disclose information to:
- Competent authorities
- Regulators
- Law enforcement

**Purpose of Disclosure:**

This is required for the prevention of:
- Money laundering
- Terrorist financing
- Fraud
- Illegal financial activity

Payva will issue warnings or recommendations where necessary to protect the system and users.`,
      },
      {
        title: "Duplicate Accounts",
        slug: "duplicate-accounts",
        content: `Payva reserves the right to prohibit the creation of duplicate accounts for the same user due to security and identity verification requirements.

If duplicate accounts are detected, Payva may close or merge these accounts without prior notice.`,
      },
      {
        title: "Verification",
        slug: "verification",
        content: `If you open a Payva Account and use certain Services, we are legally required to verify certain information.

**Authorization:**
By opening an account, you authorize Payva to make any inquiries we deem necessary to verify your identity, address, residency, phone number, email address, or any other relevant information, either directly or through third parties.

**Verification Process:**
- If a credit check fails, we may request alternative documentation for identity verification
- Payva may access government and private databases to verify your information
- If a match is found, we may not require photographic identification

**Consequences of Failed Verification:**
If we cannot obtain or verify required information, we may close, suspend, or restrict your Payva Account and/or access to the Services.`,
      },
    ],
  },
  {
    key: "deposits-balance",
    category: "Deposits & Balance",
    sections: [
      {
        title: "Depositing Money",
        slug: "depositing-money",
        content: `You may deposit supported currencies into your Payva Account in order to:
1. Convert the currency
2. Send funds to another person or to your own account
3. Hold a balance for future use

### Interac™

When depositing money via Interac™:
- You confirm that you are authorized to access and transfer funds from your bank account via Interac™
- You can initiate an Interac™ e-transfer or approve an Interac™ request for the relevant amount
- Deposits require your email address or phone number
- Your bank may limit the amount or frequency of Interac™ transfers
- For legal and security purposes, Payva may also impose deposit limits

### Electronic Funds Transfer (EFT)

When you initiate an EFT:
- You authorize us or our third-party payment processor to electronically transfer funds from your linked bank account to your Payva Wallet
- EFTs processed through Payments Canada may take 1–2 business days or longer to settle
- You are responsible for ensuring that the designated bank account is in your name and contains sufficient funds

### Debit Card Transactions

You may fund your Payva Wallet using a valid debit card issued in your name:
- By providing debit card details, you authorize us or our third-party processor to charge your card for the amount specified
- Your card issuer may enforce its own limits, fees, or processing times
- We may require additional verification or impose funding limits for risk, fraud, or compliance purposes`,
      },
      {
        title: "Balance in Your Payva Account",
        slug: "account-balance",
        content: `**Important Notice:**

Payva is not a bank. Funds held as a balance in your Payva Account represent an unsecured claim against Payva and are not insured by the Canada Deposit Insurance Corporation (CDIC).`,
      },
      {
        title: "Transaction History",
        slug: "transaction-history",
        content: `All your transactions are recorded in the transaction history section of your Payva Account, including:
- Balances
- Deposits
- Received funds
- Conversions
- Transfers
- Withdrawals
- Applicable fees and exchange rates

**After logging in, you may view:**
- Your Payva Account balance in any supported currency
- You may maintain balances in multiple currencies and assume full responsibility for associated risks

**If you have a Payva Account balance, you may:**
1. Withdraw funds to your own bank account (whether or not it is based in Canada) via the Interac method, depending on the currency
2. Send funds to a beneficiary account in Canada or supported countries through international money transfer`,
      },
    ],
  },
  {
    key: "transactions",
    category: "Transactions",
    sections: [
      {
        title: "Limits on Inbound and Outbound Money Transfers",
        slug: "transfer-limits",
        content: `Your Payva Account is subject to inbound and outbound transfer limits as updated from time to time.

If a transfer request exceeds applicable limits, we may:
- Decline the request
- Impose additional checks, obligations, or time delays before processing the transaction`,
      },
      {
        title: "Delay in Sending Money",
        slug: "sending-delays",
        content: `We do not control how long your bank or payment service provider takes to credit funds to you or your beneficiary.

**Important Notes:**
- While we make reasonable efforts to ensure timely completion of transactions, timing is dependent on third-party service providers whose terms and conditions we must follow
- We may delay a transaction if we need to verify or confirm any information to our satisfaction or that of third-party service providers

### Delay in Conversion

We perform verification checks that may extend the time required to process your currency conversion order. We are not responsible for any delays resulting from these verification procedures.`,
      },
      {
        title: "Cancellation of Your Currency Conversion Order",
        slug: "conversion-cancellation",
        content: `You may cancel a currency conversion order at any time before the funds are converted according to your instructions and receive a full refund.

**Warning:**
Repeated cancellations may result in restrictions being placed on your use of the Services.`,
      },
      {
        title: "Payment Instructions",
        slug: "payment-instructions",
        content: `You are responsible for ensuring that the instructions you provide to us are complete and accurate.

**Important:**
Once Payva has executed your payment instructions, the transaction cannot be cancelled or reversed, and we are not liable for any loss arising from a transaction carried out in accordance with your instructions.

**You further acknowledge that:**
- Your payment instructions are subject to our approval and that of any third parties involved in processing your payments
- Your instructions must be accurate, valid, and initiated solely with your consent
- Once approved by you, your instructions do not give rise to any claim, liability, loss, or chargeback against us
- Your instructions are subject to our legal and regulatory obligations worldwide`,
      },
    ],
  },
  {
    key: "fees-taxes",
    category: "Fees & Taxes",
    sections: [
      {
        title: "Fees and Taxes",
        slug: "fees-taxes",
        content: `**Fee Disclosure:**
Fees for withdrawing or sending money, currency conversion, or any other services will be disclosed to you at the time you place an order (as amended by Payva from time to time at our sole discretion) and before you confirm the transaction.

**Payment Agreement:**
You agree to pay the applicable fees using the payment method specified by us at the time you complete the transaction.

**Additional Charges:**
Our fees may include charges imposed by your bank or third parties involved in processing your transaction, and such fees may be deducted from funds you deposit or from your Payva Account balance.

### API Partners

**API** refers to the application programming interface provided by Payva.

**API Partner** is any business we collaborate with to offer Payva Services through their website, mobile app, or similar platform.

**Partner Fees:**
- API Partners may charge their own fees for the use of the Services through their platform
- These fees are set by the API Partner and are separate from any transaction-related fees charged by Payva
- Payva may collect such fees on behalf of the API Partner

### Tax Responsibilities

You are responsible for any taxes applicable to payments you make or receive and for collecting, reporting, and paying such taxes to the appropriate authorities.`,
      },
    ],
  },
  {
    key: "account-closure",
    category: "Account Closure",
    sections: [
      {
        title: "Closing Your Payva Account",
        slug: "account-closure",
        content: `Your Payva Account may be closed by you or by us for various reasons, depending on the circumstances.

### Closure by You

**i.** You may close your Payva Account at any time by contacting Customer Support

**ii.** If your Account contains funds at the time of closure:
- You must withdraw them within a reasonable timeframe
- No later than 3 months after notifying us of your intention to close your Account

**iii.** You remain responsible for all obligations related to your Payva Account even after it is closed

### Closure by Payva

Payva reserves the right, in its sole discretion, to suspend or terminate this Customer Agreement and your access to or use of our Website, software, systems, or Mobile App (including any networks and servers used to provide the Services).

**This may result in:**
- Restrictions on your ability to use the Payva App or Payva Account
- Restrictions on access to your funds at our sole discretion

**Reasons for closing your Payva Account include, but are not limited to:**

**I.** Your breach of any provision of this Customer Agreement or any referenced documents

**II.** A directive from a court, government authority, or law enforcement agency

**III.** Suspicion that you have violated or breached any applicable law or regulation

**IV.** Suspicion that you are involved in fraudulent activity, money laundering, terrorism financing, or other criminal activity

**Account Compromise:**
We may also suspend your Payva Account if it has been compromised, used without authorization, or used fraudulently.

**Notification and Fund Withdrawal:**
If we close your Account or terminate your use of the Services for any reason, we will notify you and make any unrestricted funds held in your Payva Account available for withdrawal, subject to our discretion.

### Indemnification

In the event of any loss, claim, cost, or expense (including reasonable legal fees) arising from your breach of this Agreement, violation of applicable law, or the actions of you or an authorized third party in your use of the Services, you agree to defend, indemnify, and hold harmless Payva and its affiliates.

This obligation survives the termination of our relationship.`,
      },
    ],
  },
  {
    key: "communications",
    category: "Communications",
    sections: [
      {
        title: "Communications",
        slug: "communications",
        content: `Certain information must be provided to you in writing.

**Electronic Consent:**
By accepting this Customer Agreement, you consent to receive communications electronically via:
- Email
- SMS
- Notices on the Website
- The Payva Mobile App
- Any other communication channel designated by us

### Phone Communications

We may call or text the phone number(s) you have provided to:
1. Notify you of Payva Account activity
2. Investigate or prevent fraud

**Privacy Protection:**
- We may share your phone number(s) with service providers who assist us
- We will not share them with third parties for their own purposes without your consent`,
      },
    ],
  },
  {
    key: "issues-resolutions",
    category: "Issues & Resolutions",
    sections: [
      {
        title: "Reversals and Chargebacks",
        slug: "reversals-chargebacks",
        content: `You are responsible for all reversals, chargebacks, claims, fees, fines, penalties, and other liabilities incurred by Payva arising from your breach of this Agreement or your use of the Services.

**Reimbursement:**
You agree to reimburse Payva for all such liabilities.

### Payment Invalidation

Payments made to you may be invalidated and reversed if:

**i.** Bank or payment processor determines the transaction was fraudulent

**ii.** Payva sent the payment to you in error

**iii.** The payment was unauthorized or invalidated by the sending bank

**iv.** The payment was received in breach of this Agreement

**v.** Payva has a claim against you for the funds

**Liability:**
If you receive a payment, you are liable to Payva for the full amount if it is later invalidated.`,
      },
      {
        title: "Negative Account Balances",
        slug: "negative-balances",
        content: `If your Payva Account balance becomes negative for any reason—including due to reversals or chargebacks—you owe the negative balance to Payva and must repay it immediately without notice.`,
      },
      {
        title: "Errors and Unauthorized Transactions",
        slug: "errors-unauthorized",
        content: `**Account Monitoring:**
To protect yourself from errors or unauthorized activity:
- Regularly log in to your Account and review your statements
- Payva will notify you of each transaction via email or other authorized channels
- You must review these notifications to verify accuracy

**Protection:**
Payva provides protection against unauthorized activity and errors. When applicable, we will reimburse you for the full amount of the unauthorized activity, provided that you cooperate with us and notify us promptly.

### Error Correction

We may correct any errors identified. Examples include:
1. Incorrect debits or credits to your Account
2. Misrecorded or missing transactions
3. Incorrect amounts sent or received

**Investigation Process:**
If you report an error as described above:
- Payva will investigate and determine whether an error occurred within ten (10) business days
- We will correct it promptly
- If more time is required, we may take up to forty-five (45) days to complete the investigation`,
      },
      {
        title: "Meaning of Unauthorized Transaction",
        slug: "unauthorized-definition",
        content: `**Unauthorized Transaction Definition:**
An Unauthorized Transaction occurs when funds are sent from your Payva Account without your authorization and without benefiting you.

**Example:**
If someone steals your password and sends a payment from your Account.

### NOT Considered Unauthorized Transactions:

**i.** If you share your login credentials with someone and they use your Account without your permission, you are responsible for such transactions

**ii.** Reversals or invalidations caused by your own error, negligence, or failure to follow responsible conduct`,
      },
      {
        title: "Complaints",
        slug: "complaints",
        content: `If you have any questions or complaints regarding the Services, please contact our Customer Service at:

**Email:** holla@payvapayment.com`,
      },
    ],
  },
  {
    key: "technology",
    category: "Technology",
    sections: [
      {
        title: "Payva App Conditions",
        slug: "app-conditions",
        content: `In exchange for your agreement to comply with this Customer Agreement, we grant you a non-transferable, non-exclusive license to use the App on your device, subject to the terms of this Agreement and the App Store and Google Play rules.

**All other rights are reserved.**

### Updates

Updates may be issued periodically through the App Store or Google Play. Depending on the update, you may need to:
- Install the latest version of the App
- Accept updated terms before you can continue using the Services`,
      },
      {
        title: "Apple iOS Terms",
        slug: "apple-ios-terms",
        content: `These terms apply specifically to your use of the App on Apple iOS devices:

**i.** Apple is not a party to this Agreement and does not own or bear responsibility for the Payva App

**ii.** Apple provides no warranty and is not responsible for maintenance, support, claims, damages, or legal or regulatory issues associated with the App

**iii.** Any App-related inquiries, including those involving intellectual property, should be directed to Payva

**iv.** You are granted a non-transferable license to use the Payva App on an Apple-branded iOS device owned or controlled by you, as permitted under Apple's Usage Rules

**v.** Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce its terms against you

**Compliance:**
You must comply with all third-party agreements applicable to your use of the App (e.g., wireless data agreements).`,
      },
      {
        title: "Third-Party Materials",
        slug: "third-party-materials",
        content: `This includes the accuracy, validity, timeliness, completeness, reliability, integrity, quality, legality, usefulness, or safety of any Third-Party Materials, as well as any intellectual property rights they may contain.

**Disclaimer:**
- Certain Third-Party Materials may be inaccurate, misleading, or deceptive
- Nothing in this Agreement shall be interpreted as a representation or warranty by us regarding any Third-Party Materials
- We have no obligation to monitor Third-Party Materials
- We may, at any time, block or disable access to any such materials (in whole or in part) through the Website or App

**No Endorsement:**
The availability of Third-Party Materials through the Website or Payva App does not signify our endorsement of, or affiliation with, the provider of such materials, nor does it create any legal relationship between you and such providers.

**Your Risk:**
Your use of Third-Party Materials is entirely at your own risk and is subject to any additional terms, conditions, and policies associated with them (including the provider's terms of service or privacy policies).`,
      },
    ],
  },
  {
    key: "liability-terms",
    category: "Liability & Terms",
    sections: [
      {
        title: "Limitation on Payva's Liability",
        slug: "liability-limitation",
        content: `**Jurisdictional Note:**
Some provinces and territories do not permit the exclusion or limitation of liability for all types of damages (including the Province of Quebec). In such jurisdictions, Payva will only be liable to you for damages to the extent expressly required under applicable law.

### Liability Exclusions

In all other jurisdictions, you expressly acknowledge and agree that neither Payva (including our parent company and affiliates), nor our officers, directors, agents, joint venturers, employees, or suppliers shall be liable for:
- Lost profits
- Any special, incidental, indirect, consequential, or punitive damages
- Loss of data or loss of business

This applies regardless of the cause (including negligence) arising out of or connected to our Website, the Services, or this Customer Agreement.

### Liability Cap

Our total liability (including that of our parent and affiliates, and their respective officers, directors, agents, joint venturers, employees, and suppliers) to you or any third party is strictly limited to the actual amount of direct damages.

### Additional Exclusions

To the fullest extent permitted by law, Payva and related parties shall not be liable for any damages or losses resulting directly or indirectly from:

**i.** Your use of, or inability to use, Payva's sites and services

**ii.** Delays or interruptions in Payva's sites and services

**iii.** Viruses or other malicious software obtained by accessing Payva's sites, services, or linked content

**iv.** Glitches, bugs, errors, or inaccuracies of any kind in Payva's sites, services, information, or graphics

**v.** The actions, content, or omissions of third parties

**vi.** Any suspension or other action taken with respect to your Account

**vii.** Your need to change your practices, content, or behaviour—or your inability to conduct business—due to changes to this Agreement or Payva's policies

**Policy Changes:**
Payva reserves the right to revise its policies and this Customer Agreement at any time, in accordance with the provisions set out herein.`,
      },
      {
        title: "Service Availability",
        slug: "service-availability",
        content: `We will make reasonable efforts to ensure our Services are available when needed; however, we do not guarantee uninterrupted or continuous availability.

**Our Rights:**
We reserve the right to suspend, withdraw, discontinue, or modify all or any part of our Services without notice.

**No Liability:**
We are not liable if, for any reason, our Services are unavailable (in whole or in part) at any time.

**Your Responsibility:**
You are responsible for obtaining all necessary equipment and telecommunications services to access the Services.`,
      },
      {
        title: "No Warranty",
        slug: "no-warranty",
        content: `**Jurisdictional Note:**
Some provinces and territories do not allow the exclusion of warranties (including Quebec). In such jurisdictions, you retain the warranties required under applicable law.

### Warranty Disclaimer

In all other jurisdictions, except as expressly stated herein:

Payva, our employees, and our suppliers provide the Services **"as is"** without any express, implied, or statutory warranties or conditions.

**Specifically Disclaimed:**
- Implied warranties of title
- Merchantability
- Fitness for a particular purpose
- Non-infringement`,
      },
      {
        title: "Relationship of the Parties",
        slug: "party-relationship",
        content: `Your relationship with Payva under this Customer Agreement is that of a Money Services Business acting as an independent contractor.

**What We Are Not:**
- Payva is not your agent or trustee
- This Agreement does not create any partnership, joint venture, employment, agency, or franchisor-franchisee relationship between you and Payva`,
      },
      {
        title: "Entire Agreement",
        slug: "entire-agreement",
        content: `This Customer Agreement, together with all applicable policies, amendments, and notices communicated from time to time and posted through the Payva App or Website, constitutes the entire agreement between you and Payva regarding the Services.

**Supersedes:**
It supersedes all prior or contemporaneous agreements, whether oral or written.

**Parties:**
This Agreement is solely between you and Payva; no other person has rights to enforce its terms.`,
      },
      {
        title: "Severance",
        slug: "severance",
        content: `If any provision of this Agreement is deemed unlawful, void, or unenforceable, that provision will be severed to the extent required without affecting the validity and enforceability of the remaining provisions.

**Replacement:**
Where possible, the parties shall jointly replace the invalid provision with a valid one that closely reflects the intended purpose.`,
      },
      {
        title: "Law and Jurisdiction",
        slug: "law-jurisdiction",
        content: `**Governing Law:**
The Services and any disputes arising from them are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.

**Jurisdiction:**
Any dispute or claim related to the Services, this Customer Agreement, or the use of the Website or Payva App is subject to the non-exclusive jurisdiction of the courts of the Province of Alberta.`,
      },
      {
        title: "Language",
        slug: "language",
        content: `The parties agree that this Customer Agreement and all related documents shall be written in English.`,
      },
      {
        title: "Assignment",
        slug: "assignment",
        content: `**Your Rights:**
You may not assign or transfer any rights or obligations under this Customer Agreement without Payva's prior written consent.

**Our Rights:**
Payva may assign or transfer this Customer Agreement, or any rights or obligations under it, at any time.`,
      },
      {
        title: "Waiver",
        slug: "waiver",
        content: `Our failure to act concerning a breach of this Agreement by you or others does not waive our right to take action in respect of subsequent or similar breaches.`,
      },
    ],
  },
  {
    key: "data-protection",
    category: "Data Protection",
    sections: [
      {
        title: "Data Controller",
        slug: "data-controller",
        content: `The Company, whether independently or through its subsidiaries, acts as a Data Controller.

**Processing Requirements:**
To provide services relating to your Account, we must collect and process your personal data either:
- With your consent, or
- On legal grounds necessary to comply with Anti-Money Laundering laws or other governmental requirements

**Parental Consent:**
Where applicable, parental consent is explicitly required for Account holders under age 13.`,
      },
      {
        title: "Privacy Policy",
        slug: "privacy-policy",
        content: `Your privacy is important to us.

Our separate Privacy Policy provides detailed information on how we collect, manage, process, secure, and store your personal information.

**Integration:**
The Privacy Policy forms part of this User Agreement and is incorporated by reference. You should review the Privacy Policy carefully.`,
      },
      {
        title: "Data Retention",
        slug: "data-retention",
        content: `Payva maintains practices and procedures governing the retention of data collected in connection with the provision of our Services, including Registration Information ("Data").

**These practices ensure that:**

**i.** Data is adequately protected and preserved

**ii.** Data no longer required by the Company or deemed valueless is discarded at the proper time

**iii.** Subscriber Data is properly retained and, when appropriate, returned or destroyed

**No Storage Guarantee:**
We do not guarantee the continued storage or display of any content or information you upload. You acknowledge that we have no obligation to store, maintain, or provide copies of content or information except as required by applicable law and as stated in our Privacy Policy.`,
      },
      {
        title: "Document Destruction",
        slug: "document-destruction",
        content: `Payva will retain user information, data, and content submitted through the Application in accordance with the retention policy of your academic institution or applicable law—whichever is longer.

**After that period, the Data will be either:**

**i.** Archived, or

**ii.** Deleted, at our sole discretion

**Deletion Process:**
If deletion is required, we will make reasonable efforts to remove or destroy the Data in our possession.`,
      },
      {
        title: "Litigation Hold",
        slug: "litigation-hold",
        content: `If Payva receives a subpoena, document request, or becomes aware of a government investigation, audit, or litigation involving the Company or one of our clients:

- All document destruction will be suspended until our legal counsel advises otherwise
- Payva will promptly notify all relevant staff of the suspension`,
      },
    ],
  },
  {
    key: "promotions",
    category: "Promotions",
    sections: [
      {
        title: "Promotions",
        slug: "promotions",
        content: `Payva may offer promotions, products, or services—including special, ad-hoc promotions for existing Users or incentives for new Users.

**Terms:**
All promotions are governed by their own specific terms and conditions, which must be read, understood, and accepted before participation.

### General Conditions for Monetary Promotions

As a general condition, promotions offering monetary value are subject to the following:

**Expiration:**
- Awards must be used within 30 days from the date awarded
- Must be applied as part of an international money transfer (subject to any minimum transfer value, currently $5, subject to change)

**Additional Awards:**
- Additional awards, bonuses, or prizes must be used within 30 days of issuance or they may be withdrawn without notice

**Amendments:**
- Monetary awards may be amended, removed, or replaced at any time at Payva's sole discretion`,
      },
    ],
  },
];
