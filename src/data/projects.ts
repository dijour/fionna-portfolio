export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  year: string;
  credits: ProjectCredit[];
  note?: string;
  description?: string;
  heroImage: string;
  thumbnail: string;
  images: string[];
  liveProjectUrl?: string;
  prevProject?: { slug: string; title: string };
  nextProject?: { slug: string; title: string };
}

export const projects: Project[] = [
  {
    slug: "thefourseasons",
    title: "The Four Seasons : Season 1",
    company: "Netflix",
    year: "2024",
    credits: [
      { role: "Costume Designer", name: "Tina Nigro" },
      { role: "Assistant Costume Designer", name: "Jessica Leslie" },
      { role: "Costumes Assistant", name: "Fionna Lui" },
    ],
    heroImage: "/images/fourseasons/hero.jpg",
    thumbnail: "/images/home/fourseasons.jpg",
    images: [
      "/images/fourseasons/img1.jpg",
      "/images/fourseasons/img2.jpg",
      "/images/fourseasons/img3.jpg",
      "/images/fourseasons/img4.jpg",
      "/images/fourseasons/img5.jpg",
    ],
    liveProjectUrl: "https://www.youtube.com/watch?v=WKTwtIL4xyk",
    nextProject: { slug: "ahs", title: "American Horror Story: Delicate (Season 12)" },
  },
  {
    slug: "ahs",
    title: "American Horror Story: Delicate (Season 12)",
    company: "FX / 20th Television",
    year: "2023-2024",
    credits: [
      { role: "Designer", name: "Jackie Demeterio" },
      { role: "Assistant Costume Designer", name: "Jessica Zavala" },
      { role: "Wardrobe Supervisor", name: "Jose Bantula" },
      { role: "Costumes Assistant", name: "Fionna Lui" },
    ],
    note: "Won a Creative Arts Emmy Award for Outstanding Contemporary Costumes for a Limited or Anthology Series or Movie at the 76th Primetime Creative Arts Emmy Awards.",
    heroImage: "/images/ahs/hero.jpeg",
    thumbnail: "/images/home/ahs.jpeg",
    images: [
      "/images/ahs/img1.jpg",
      "/images/ahs/img2.jpg",
      "/images/ahs/img3.jpg",
      "/images/ahs/img4.jpg",
      "/images/ahs/img5.jpg",
      "/images/ahs/img6.jpg",
      "/images/ahs/img7.jpg",
    ],
    prevProject: { slug: "thefourseasons", title: "The Four Seasons : Season 1" },
    nextProject: { slug: "airjordan", title: "Air Jordan 40th Anniversary: Unbannable" },
  },
  {
    slug: "airjordan",
    title: "Air Jordan 40th Anniversary: Unbannable",
    company: "Imperial Woodpecker",
    year: "2024",
    credits: [
      { role: "Designer", name: "Camille Garmendia" },
      { role: "Assistant Designers", name: "Karen Baird, Jill Losquadros" },
      { role: "Costumes Coordinator", name: "Fionna Lui" },
    ],
    note: "Premiered at the 2025 Grammy Awards.",
    heroImage: "/images/airjordan/hero.jpg",
    thumbnail: "/images/home/airjordan.jpg",
    images: [
      "/images/airjordan/img1.jpg",
      "/images/airjordan/img2.jpg",
      "/images/airjordan/img3.jpg",
      "/images/airjordan/img4.jpg",
      "/images/airjordan/img5.jpg",
      "/images/airjordan/img6.jpg",
    ],
    prevProject: { slug: "ahs", title: "American Horror Story: Delicate (Season 12)" },
    nextProject: { slug: "chanel", title: "Bleu de Chanel" },
  },
  {
    slug: "chanel",
    title: "Bleu de Chanel",
    company: "Superprime Productions",
    year: "2023",
    credits: [
      { role: "Director", name: "Martin Scorsese" },
      { role: "Costume Designer", name: "John Dunn" },
      { role: "Assistant Designers", name: "Maria Zamansky, Hanna Shea" },
      { role: "Costume Assistant", name: "Fionna Lui" },
    ],
    description: "Chanel launched a new ad for their male perfume line called Bleu de Chanel, featuring Timothée Chalamet as their new global ambassador.",
    heroImage: "/images/chanel/hero.jpg",
    thumbnail: "/images/chanel/hero.jpg",
    images: [
      "/images/chanel/img1.png",
      "/images/chanel/img2.png",
      "/images/chanel/img3.png",
      "/images/chanel/img4.png",
      "/images/chanel/img5.png",
      "/images/chanel/img6.png",
      "/images/chanel/img7.png",
    ],
    prevProject: { slug: "airjordan", title: "Air Jordan 40th Anniversary: Unbannable" },
    nextProject: { slug: "thelifelist", title: "The Life List" },
  },
  {
    slug: "thelifelist",
    title: "The Life List",
    company: "Netflix",
    year: "2024",
    credits: [
      { role: "Costume Designer", name: "Madeline Weeks" },
      { role: "Assistant Costume Designer", name: "Julia Brown" },
      { role: "Costumes Assistant", name: "Fionna Lui" },
    ],
    heroImage: "/images/lifelist/hero.jpg",
    thumbnail: "/images/lifelist/hero.jpg",
    images: [
      "/images/lifelist/img1.jpg",
      "/images/lifelist/img2.jpg",
      "/images/lifelist/img3.jpg",
      "/images/lifelist/img4.jpg",
      "/images/lifelist/img5.jpg",
      "/images/lifelist/img6.jpg",
      "/images/lifelist/img7.jpg",
      "/images/lifelist/img8.jpg",
      "/images/lifelist/img9.jpg",
    ],
    liveProjectUrl: "https://www.youtube.com/watch?v=nldAfgJrBr8",
    prevProject: { slug: "chanel", title: "Bleu de Chanel" },
    nextProject: { slug: "bodega", title: "Bodega" },
  },
  {
    slug: "bodega",
    title: "Bodega",
    company: "",
    year: "2023",
    credits: [
      { role: "Director", name: "Sharik Atkinson" },
      { role: "Costume Designer", name: "Fionna Lui" },
    ],
    heroImage: "/images/bodega/hero.jpg",
    thumbnail: "/images/bodega/hero.jpg",
    images: [
      "/images/bodega/img1.png",
      "/images/bodega/img2.png",
      "/images/bodega/img3.png",
      "/images/bodega/img4.png",
      "/images/bodega/img5.png",
      "/images/bodega/img6.png",
      "/images/bodega/img7.png",
      "/images/bodega/img8.png",
      "/images/bodega/img9.png",
    ],
    liveProjectUrl: "https://www.youtube.com/watch?v=Q5gdbfz888E",
    prevProject: { slug: "thelifelist", title: "The Life List" },
  },
];

export interface ComingSoonProject {
  slug: string;
  title: string;
  company: string;
  year: string;
  thumbnail: string;
}

export const comingSoonProjects: ComingSoonProject[] = [
  {
    slug: "devilwearsprada2",
    title: "The Devil Wears Prada 2",
    company: "Disney",
    year: "2025",
    thumbnail: "/images/devilwearsprada2/hero.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
