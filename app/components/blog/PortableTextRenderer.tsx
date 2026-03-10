import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

interface PortableTextRendererProps {
  value: TypedObject[];
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-bold leading-tight text-slate-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-2xl font-bold leading-tight text-slate-900">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-6 text-lg leading-8 text-slate-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 rounded-r-xl border-l-4 border-[#006D68] bg-slate-50 p-5 text-lg italic text-slate-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-2 pl-6 text-lg text-slate-700">
        {children}
      </ul>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href as string | undefined;
      if (!href) return <>{children}</>;

      const isExternal = href.startsWith("http");

      return (
        <Link
          href={href}
          className="font-medium text-[#006D68] underline underline-offset-4"
          rel={isExternal ? "noreferrer noopener" : undefined}
          target={isExternal ? "_blank" : undefined}
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value)
        ?.width(1600)
        .height(900)
        .fit("max")
        .auto("format")
        .url();

      if (!imageUrl) return null;

      const alt = (value?.alt as string | undefined) || "Blog image";

      return (
        <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            src={imageUrl}
            alt={alt}
            width={1600}
            height={900}
            className="h-auto w-full"
          />
          {alt ? (
            <figcaption className="px-4 py-3 text-sm text-slate-500">{alt}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

const PortableTextRenderer = ({ value }: PortableTextRendererProps) => {
  return <PortableText value={value} components={components} />;
};

export default PortableTextRenderer;
