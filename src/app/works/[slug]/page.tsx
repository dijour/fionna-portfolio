import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ProjectNav } from "@/components/ProjectNav";
import { ProjectHero } from "@/components/ProjectHero";

/* ---------- Static params for all 6 projects ---------- */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ---------- Dynamic metadata per project ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - ${siteConfig.name}`,
    description: project.description ?? `${project.title} by ${siteConfig.name}`,
    openGraph: {
      title: `${project.title} - ${siteConfig.name}`,
      description:
        project.description ?? `${project.title} by ${siteConfig.name}`,
      images: [project.heroImage],
    },
  };
}

/* ====================================================== */
/*  Page Component                                         */
/* ====================================================== */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      {/* ------------------------------------------------- */}
      {/*  1. Hero Section                                   */}
      {/* ------------------------------------------------- */}
      <ProjectHero title={project.title} heroImage={project.heroImage} />

      {/* ------------------------------------------------- */}
      {/*  2. Project Details Section                        */}
      {/* ------------------------------------------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24">
          {/* Company + Year row */}
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 mb-10">
            {project.company && (
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {project.company}
              </span>
            )}
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-auto">
              {project.year}
            </span>
          </div>

          {/* Credits list */}
          {project.credits.length > 0 && (
            <div className="mb-10 grid gap-3">
              {project.credits.map((credit, idx) => (
                <div key={idx} className="flex flex-wrap gap-x-2 text-sm">
                  <span className="font-bold uppercase tracking-wide text-gray-900">
                    {credit.role}
                  </span>
                  <span className="text-gray-500">&mdash;</span>
                  <span className="uppercase tracking-wide text-gray-600">
                    {credit.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Emmy / award note */}
          {project.note && (
            <p className="mb-8 text-sm leading-relaxed text-[#09f] font-medium italic">
              {project.note}
            </p>
          )}

          {/* Description */}
          {project.description && (
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-700">
              {project.description}
            </p>
          )}

          {/* Live project link */}
          {project.liveProjectUrl && (
            <a
              href={project.liveProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-[#09f] underline underline-offset-4
                         hover:opacity-70 transition-opacity"
            >
              Visit live project
            </a>
          )}
        </div>
      </section>

      {/* ------------------------------------------------- */}
      {/*  3. Image Gallery                                  */}
      {/* ------------------------------------------------- */}
      {project.images.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-[1200px] px-5 md:px-10 pb-16 md:pb-24">
            <div className="flex flex-col gap-4 md:gap-6">
              {project.images.map((src, idx) => (
                <div key={idx} className="relative w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`${project.title} - Image ${idx + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------- */}
      {/*  4. Project Navigation (Prev / Next)               */}
      {/* ------------------------------------------------- */}
      <ProjectNav
        prevProject={project.prevProject}
        nextProject={project.nextProject}
      />

      {/* ------------------------------------------------- */}
      {/*  5. Contact CTA                                    */}
      {/* ------------------------------------------------- */}
      <section className="bg-[#050505] text-white">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-24 md:py-32 text-center">
          <p className="text-lg md:text-xl font-medium mb-2">
            {siteConfig.contact.cta}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight
                       hover:text-[#09f] transition-colors"
          >
            {siteConfig.contact.ctaLink}
          </a>
          <div className="mt-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs font-bold uppercase tracking-widest text-gray-400
                         hover:text-white transition-colors"
            >
              {siteConfig.email.toUpperCase()}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
