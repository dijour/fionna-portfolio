import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {siteConfig.footerNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm hover:text-[#09f] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">
              Social
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#09f] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">
              Contact
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm hover:text-[#09f] transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
