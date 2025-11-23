import type { Document } from "@/types/document";

export type Document = {
  slug: string;
  title: string;
  author: string;
  year: string;
  license: string;
  description: string;
  source: string;
  file: string;
};

export const documents: Document[] = [
  {
    slug: "einstein-1905",
    title: "On the Electrodynamics of Moving Bodies",
    author: "Albert Einstein",
    year: "1905",
    license: "PD",
    description: "The paper that introduced special relativity.",
    source: "https://en.wikisource.org/wiki/Translation:On_the_Electrodynamics_of_Moving_Bodies",
    file: "/documents/Einstein_1905_Electrodynamics_of_Moving_Bodies.pdf.pdf",
  },
  {
    slug: "tesla-1900",
    title: "The Problem of Increasing Human Energy",
    author: "Nikola Tesla",
    year: "1900",
    license: "PD",
    description: "Tesla's visionary article on energy and humanity.",
    source: "https://archive.org/details/problemofincreas00tesl",
    file: "/documents/Century_Magazine_1900_Nikola_Tesla.pdf",
  },
  {
    slug: "apollo-11-flight-plan",
    title: "Apollo 11 Flight Plan",
    author: "NASA",
    year: "1969",
    license: "PD",
    description: "The minute-by-minute plan for the first Moon landing.",
    source: "https://www.hq.nasa.gov/alsj/a11/a11fltpln_final_reformat66.pdf",
    file: "/documents/Apollo Lunar Surface Journal.pdf",
  },
];
