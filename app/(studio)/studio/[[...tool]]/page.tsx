import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Payva Blog Admin",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function StudioPage() {
  const zohoDeskBaseUrl = process.env.ZOHO_DESK_BASE_URL || "https://desk.zoho.com";

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <span className="inline-flex rounded-full bg-[#66D2CD]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#66D2CD]">
          Zoho Desk Connected
        </span>
        <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl">
          Blog publishing now runs through Zoho Desk Articles
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          The embedded Sanity Studio has been retired for this project. Manage
          articles, categories, and sections inside your Zoho Desk knowledge base,
          then the public blog on Payva will pull that content through the Zoho
          Desk APIs.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={zohoDeskBaseUrl}
            className="inline-flex rounded-xl bg-[#006D68] px-5 py-3 text-sm font-semibold text-white hover:bg-[#005853]"
          >
            Open Zoho Desk
          </Link>
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
          >
            View public blog
          </Link>
        </div>
      </div>
    </main>
  );
}
