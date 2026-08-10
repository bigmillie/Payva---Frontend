# Third-Party Integration Check

Generated: 2026-02-22T11:47:49.243Z

- [PASS] Tracking scripts (GA4/GTM): GA4 and GTM script tags are present in production HTML.
- [PASS] Waitlist API validation: Validation check passed (missing email -> 400).
- [SKIP] Waitlist end-to-end submit: Skipped: provide --email to run real Google Sheets + email flow.
- [PASS] Exchange rate provider: Exchange-rate API responded with rates payload.
- [WARN] Geo provider (ipapi): ipapi failed: status=429
- [PASS] Social profile endpoints: https://www.facebook.com/Payvaofficial?ref=1 -> 200; https://www.instagram.com/payvapayment/ -> 200; https://x.com/Payvapayment -> 403; https://www.linkedin.com/company/payvapayment -> 200
