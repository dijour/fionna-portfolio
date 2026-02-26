import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#050505] px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[56px] leading-[0.95] font-[900] tracking-[-0.06em] text-white md:text-[100px] lg:text-[140px]">
            {siteConfig.hero.heading}
          </h1>
          <p className="mt-4 text-sm font-medium tracking-[0.2em] text-white/60 uppercase md:mt-6 md:text-base">
            {siteConfig.hero.subheading}
          </p>
        </div>
      </section>

      {/* ─── Works Section ─── */}
      <section id="works" className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 pt-[100px] pb-[60px] md:px-10 md:pt-[160px] md:pb-[80px]">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-bold tracking-tight md:mb-16 md:text-4xl">
              Works
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index % 2 === 0 ? 0 : 120}>
                <Link
                  href={`/works/${project.slug}`}
                  className="project-card group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="project-card-image object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight md:mt-5 md:text-lg">
                    {project.title}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-[80px] md:px-10 md:py-[100px]">
          <FadeIn>
            <h2 className="mb-10 text-3xl font-bold tracking-tight md:mb-14 md:text-4xl">
              {siteConfig.about.title}
            </h2>
          </FadeIn>

          <div className="max-w-3xl">
            <FadeIn delay={80}>
              <p className="text-lg leading-relaxed text-gray-800 md:text-xl md:leading-[1.75]">
                {siteConfig.about.description}
              </p>
            </FadeIn>

            <FadeIn delay={160}>
              <p className="mt-6 text-base leading-relaxed text-gray-500 md:mt-8 md:text-lg md:leading-[1.75]">
                {siteConfig.about.secondary}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-[80px] md:px-10 md:py-[100px]">
          <FadeIn>
            <h2 className="mb-10 text-3xl font-bold tracking-tight md:mb-14 md:text-4xl">
              {siteConfig.services.title}
            </h2>
          </FadeIn>

          <div className="max-w-3xl divide-y divide-gray-200">
            {siteConfig.services.items.map((service, index) => (
              <FadeIn key={service.name} delay={index * 100}>
                <div className="py-8 first:pt-0 last:pb-0 md:py-10">
                  <h3 className="text-sm font-bold tracking-[0.12em] uppercase md:text-base">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-500 md:mt-4 md:text-lg">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-[80px] md:px-10 md:py-[100px]">
          <FadeIn>
            <h2 className="mb-10 text-3xl font-bold tracking-tight md:mb-14 md:text-4xl">
              {siteConfig.experience.title}
            </h2>
          </FadeIn>

          <div className="max-w-3xl divide-y divide-gray-200">
            {siteConfig.experience.items.map((item, index) => (
              <FadeIn key={item.role} delay={index * 80}>
                <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between md:py-8">
                  <div>
                    <h3 className="text-base font-bold md:text-lg">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {item.type}
                    </p>
                  </div>
                  <span className="mt-1 text-sm font-medium text-gray-500 sm:mt-0">
                    {item.period}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="bg-[#050505]">
        <div className="mx-auto max-w-[1440px] px-5 py-[100px] md:px-10 md:py-[140px]">
          <FadeIn>
            <div className="flex flex-col items-center text-center">
              <p className="text-xl font-medium text-white/70 md:text-2xl">
                {siteConfig.contact.cta}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 text-3xl font-bold text-[#09f] transition-opacity hover:opacity-80 md:mt-6 md:text-5xl"
              >
                {siteConfig.contact.ctaLink}
              </a>
              <p className="mt-8 text-xs font-medium tracking-[0.15em] text-white/40 md:mt-10 md:text-sm">
                {siteConfig.email.toUpperCase()}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
