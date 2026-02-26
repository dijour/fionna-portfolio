import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-5 text-center">
      <h1 className="text-6xl font-black uppercase tracking-[-0.04em] text-white md:text-8xl">
        404
      </h1>
      <p className="mt-4 text-sm font-medium uppercase tracking-widest text-gray-400">
        Project not found
      </p>
      <Link
        href="/"
        className="mt-10 inline-block text-sm font-semibold uppercase tracking-wide text-[#09f]
                   underline underline-offset-4 hover:opacity-70 transition-opacity"
      >
        Back to Home
      </Link>
    </section>
  );
}
