import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-[#050505] text-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 text-center">
        <p className="text-lg md:text-xl mb-2">
          {siteConfig.contact.cta}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[#09f] text-lg md:text-xl underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          {siteConfig.contact.ctaLink}
        </a>
        <div className="mt-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs md:text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
          >
            {siteConfig.email.toUpperCase()}
          </a>
        </div>
      </div>
    </section>
  );
}
