# Conversion Goals and Tracking QA

Date: 2026-02-22
Environment: production (`https://www.payvapayment.com`)

## Implemented frontend events

- `waitlist_open`
- `waitlist_submit_start`
- `waitlist_submit_success`
- `waitlist_submit_failed`
- `contact_submit_start`
- `contact_submit_success`

Source references:
- `/Users/mac/personal/payva/app/components/commons/WaitlistPopup.tsx`
- `/Users/mac/personal/payva/app/components/faq/ContactUsForm.tsx`
- `/Users/mac/personal/payva/utils/lib/analytics.ts`

## GTM/GA4 mapping plan

- Goal 1: Waitlist conversion -> trigger on `waitlist_submit_success`
- Goal 2: Contact conversion -> trigger on `contact_submit_success`
- Supporting events: `waitlist_open`, `waitlist_submit_start`, `waitlist_submit_failed`, `contact_submit_start`

## Validation steps (GTM access required)

1. Open GTM Preview mode for `https://www.payvapayment.com`.
2. Trigger waitlist modal and submit with a test email.
3. Confirm event sequence in Preview: `waitlist_open` -> `waitlist_submit_start` -> `waitlist_submit_success`.
4. Submit contact form and confirm: `contact_submit_start` -> `contact_submit_success`.
5. Open GA4 DebugView and confirm event receipt with matching names and parameters.
6. Mark `waitlist_submit_success` and `contact_submit_success` as conversions in GA4 Admin.

## Status

- Code instrumentation: complete.
- GTM Preview validation: pending (requires live GTM session).
- GA4 conversion marking: pending (requires GA4 admin action).
