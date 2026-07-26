"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Grid2X2,
  Mail,
  MapPin,
  Code2,
  Sigma,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  Star,
  Wrench,
} from "lucide-react";

const experienceDetails = {
  "Software Development": [
    "Build responsive web applications using React, Next.js, JavaScript, TypeScript, Node.js, and Tailwind CSS.",
    "Create practical tools focused on fitness, finance, personnel management, scheduling, and operational efficiency.",
    "Design application structures that connect user interfaces, backend services, databases, and business logic.",
    "Work with Java, Python, C++, SQL, MongoDB, MySQL, PostgreSQL, and Oracle Database.",
    "Use Git and GitHub for source control, project organization, deployment, and continuous improvement.",
    "Develop both personal products and client websites from initial idea through live deployment.",
  ],

  "Freelance & Client Work": [
    "Design and build responsive websites for small businesses and independent professionals.",
    "Translate client needs into clear website structure, content, services, galleries, and contact experiences.",
    "Manage the delivery process, including planning, development, revisions, deployment, domains, and updates.",
    "Delivered a live website for Ralfi's General Contracting with service pages, project galleries, and mobile support.",
    "Developing a professional website for a fitness coach focused on branding, services, and lead generation.",
    "Continue improving each project based on real client feedback and business needs.",
  ],

  "Mathematics & Problem Solving": [
    "Completed extensive coursework in applied mathematics, calculus, abstract algebra, differential equations, and statistics.",
    "Apply mathematical reasoning to algorithms, scoring systems, financial calculations, analytics, and software logic.",
    "Break complex problems into smaller steps and test multiple solution strategies.",
    "Developing an algorithmic visualization for a constrained four-pair movement puzzle.",
    "Use analytical thinking to evaluate patterns, edge cases, system behavior, and expected outcomes.",
    "Combine mathematics and software development to build accurate and understandable tools.",
  ],

  "Military Service": [
    "More than 12 years of military service with experience in leadership, finance, administration, logistics, and operations.",
    "Led and supported personnel in fast-paced environments requiring accountability, discipline, communication, and sound judgment.",
    "Managed schedules, accountability, leave, lodging, transportation, supplies, equipment, and mission support requirements.",
    "Supported financial operations by reviewing documents, tracking transactions, and ensuring accuracy and compliance.",
    "Provided technical support involving computer setup, software installation, troubleshooting, connectivity, and information systems.",
    "Use firsthand operational experience to identify inefficient processes that can be improved through software.",
  ],
};

const projects = [
  {
    title: "RuckOn Fitness",
    description:
      "A military fitness platform for AFT scoring, performance tracking, workout libraries, and personalized training recommendations.",
    status: "Active Development",
    link: "https://www.ruckonfitness.com/",
    tags: ["Next.js", "Fitness", "Analytics"],
  },

  {
    title: "MilPayRuck",
    description:
      "A military compensation and budgeting platform designed to simplify pay, allowances, taxes, expenses, and financial planning.",
    status: "In Development",
    link: "#",
    tags: ["Finance", "Node.js", "MongoDB"],
  },

  {
    title: "JTF Staff Management System",
    description:
      "A mission-focused system for staff scheduling, accountability, pass days, leave, shift coverage, reporting, and leadership visibility.",
    status: "Planning & Development",
    link: "#",
    tags: ["Operations", "Scheduling", "Management"],
  },

  {
    title: "Dhukuti",
    description:
      "A digital rotating savings platform for managing groups, monthly contributions, payout order, interest, and transparent records.",
    status: "Research & Prototype",
    link: "#",
    tags: ["FinTech", "Community", "Automation"],
  },

  {
    title: "Four-Pair Puzzle Solver",
    description:
      "An algorithmic project exploring valid movements, pair constraints, state transitions, and possible solutions to a complex puzzle.",
    status: "Research",
    link: "#",
    tags: ["Algorithms", "Mathematics", "Visualization"],
  },

  {
    title: "Ralfi's General Contracting",
    description:
      "A responsive client website showcasing remodeling, renovation, landscaping, and project gallery services.",
    status: "Delivered",
    link: "https://ralfisgeneralcontracting.com/",
    tags: ["Client Work", "Next.js", "Responsive Design"],
  },
];

function ExperienceCard({
  icon: Icon,
  title,
  children,
  active,
  onClick,
}) {
  return (
    <div className="rounded-2xl border border-lime-900/50 bg-black/30 p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-lime-500/60 hover:bg-lime-950/20">
      <Icon className="mb-6 h-9 w-9 text-lime-500" />

      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="min-h-24 text-sm leading-7 text-zinc-300">
        {children}
      </p>

      <button
        type="button"
        onClick={onClick}
        className="mt-6 text-sm font-semibold uppercase tracking-wide text-lime-400 transition hover:text-lime-300"
      >
        {active ? "Hide Details" : "Explore More"}
        <span className="ml-2">→</span>
      </button>
    </div>
  );
}

export default function PortfolioHomepage() {
  const [activeExperience, setActiveExperience] = useState(
    "Software Development"
  );

  const experiences = [
    {
      icon: Code2,
      title: "Software Development",
      summary:
        "Building useful, responsive applications that solve practical problems with modern technologies.",
    },

    {
      icon: Wrench,
      title: "Freelance & Client Work",
      summary:
        "Creating professional websites and digital solutions for real clients and small businesses.",
    },

    {
      icon: Sigma,
      title: "Mathematics & Problem Solving",
      summary:
        "Applying analytical reasoning, algorithms, and mathematics to complex technical problems.",
    },

    {
      icon: ShieldCheck,
      title: "Military Service",
      summary:
        "Operational, financial, administrative, technical, and leadership experience gained through military service.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06110d] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(132,204,22,0.18),transparent_35%),radial-gradient(circle_at_15%_30%,rgba(202,138,4,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* NAVIGATION */}

        <nav className="flex items-center justify-between border-b border-white/10 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime-600/40 bg-black/40 text-lime-400">
              <Code2 className="h-7 w-7" />
            </div>

            <div>
              <div className="text-2xl font-bold tracking-wide">
                BKC
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-500">
                Software Engineer
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-10 text-sm font-semibold uppercase tracking-wider text-zinc-200 md:flex">
            <a href="#about" className="hover:text-lime-400">
              About
            </a>

            <a href="#experience" className="hover:text-lime-400">
              Experience
            </a>

            <a href="#projects" className="hover:text-lime-400">
              Projects
            </a>

            <a href="#education" className="hover:text-lime-400">
              Education
            </a>

            <a href="#contact" className="hover:text-lime-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg border border-lime-600/70 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-lime-300 transition hover:bg-lime-500 hover:text-black md:block"
          >
            Get In Touch
          </a>
        </nav>

        {/* INTRODUCTION */}

        <section
          id="about"
          className="grid min-h-[650px] items-center gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <div className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-lime-500">
              Introduction
              <span className="h-px w-20 bg-lime-700/70" />
            </div>

            <h1 className="max-w-4xl text-6xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
              Bhim KC
            </h1>

            <p className="mt-7 text-lg font-medium leading-9 text-lime-300">
              Computer Science & Applied Mathematics Graduate
              <span className="mx-3 text-lime-700">•</span>
              Software Developer
              <span className="mx-3 text-lime-700">•</span>
              Freelancer
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              I build practical software and websites that solve real
              problems and make everyday work more efficient. My
              projects are inspired by challenges I have seen in
              military operations, finance, fitness, scheduling,
              community systems, and small businesses.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-lg bg-lime-700 px-6 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-lime-950 transition hover:bg-lime-600"
              >
                <Grid2X2 className="h-5 w-5" />
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-lg border border-lime-700 px-6 py-4 font-bold uppercase tracking-wide text-lime-200 transition hover:bg-lime-500 hover:text-black"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-5 text-sm sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lime-400">
                  Education
                </div>

                <div className="font-semibold text-white">
                  CS & Applied Math
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lime-400">
                  Focus
                </div>

                <div className="font-semibold text-white">
                  Practical Software
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lime-400">
                  Experience
                </div>

                <div className="font-semibold text-white">
                  Military & Freelance
                </div>
              </div>
            </div>
          </div>

          {/* PROFILE IMAGE */}

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-lime-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-lime-900/60 bg-black/40 p-3 shadow-2xl shadow-black/50">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Bhim KC"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06110d] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
                    Building with purpose
                  </p>

                  <p className="mt-3 max-w-md text-lg leading-8 text-zinc-100">
                    Turning operational challenges and everyday
                    problems into practical digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section id="experience" className="py-12">
          <div className="mb-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-lime-500">
            Experience
            <span className="h-px w-20 bg-lime-700/70" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item) => (
              <ExperienceCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                active={activeExperience === item.title}
                onClick={() =>
                  setActiveExperience(
                    activeExperience === item.title
                      ? ""
                      : item.title
                  )
                }
              >
                {item.summary}
              </ExperienceCard>
            ))}
          </div>

          {activeExperience && (
            <div className="mt-6 rounded-2xl border border-lime-900/60 bg-black/40 p-7 shadow-lg shadow-black/20">
              <h3 className="text-2xl font-bold text-white">
                {activeExperience}
              </h3>

              <ul className="mt-5 grid gap-3 text-sm leading-7 text-zinc-300 md:grid-cols-2">
                {experienceDetails[activeExperience].map(
                  (detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-lime-500" />

                      <span>{detail}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </section>

        {/* PROJECTS */}

        <section
          id="projects"
          className="border-t border-white/10 py-12"
        >
          <div className="mb-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-lime-500">
            Featured Projects
            <span className="h-px w-20 bg-lime-700/70" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-2xl border border-lime-900/50 bg-black/30 p-6 transition hover:-translate-y-1 hover:border-lime-500/50 hover:bg-lime-950/20"
              >
                <BriefcaseBusiness className="mb-5 h-8 w-8 text-lime-500" />

                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-500">
                  {project.status}
                </div>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-lime-300">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-lime-950 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-lime-400 hover:text-lime-300"
                  >
                    Visit Project →
                  </a>
                ) : (
                  <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    Details Coming Soon
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION AND SECOND IMAGE */}

        <section className="border-t border-white/10 py-12">
        <div
  id="education"
  className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]"
>
  <div className="flex min-h-[500px] flex-col justify-center rounded-2xl border border-lime-900/50 bg-black/30 p-10">
    <div className="mb-8 flex items-center gap-3 text-lime-400">
      <GraduationCap />

      <h2 className="text-2xl font-bold uppercase tracking-widest">
        Education
      </h2>
    </div>

    <div className="space-y-10 border-l border-lime-800 pl-6">
      <div>
        <div className="text-sm text-zinc-400">
          Queens College, City University of New York
        </div>

        <div className="mt-2 text-xl font-bold">
          Bachelor&apos;s Degree in Computer Science & Applied Mathematics
        </div>
      </div>

      <div>
        <div className="text-sm text-zinc-400">
          LaGuardia Community College
        </div>

        <div className="mt-2 text-xl font-bold">
          Associate Degree in Liberal Arts: Math & Science
        </div>
      </div>
    </div>
  </div>

  <div className="overflow-hidden rounded-2xl border border-lime-900/50 bg-black/30 p-3">
    <div className="relative min-h-[500px] overflow-hidden rounded-xl">
      <Image
        src="/hero.JPG"
        alt="Bhim KC professional background"
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime-400">
          Current Focus
        </p>

        <p className="mt-3 text-lg leading-8 text-zinc-100">
          Building software, improving existing products, and delivering
          useful digital solutions for clients.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* SKILLS */}

          <div
            id="interests"
            className="mt-6 rounded-2xl border border-lime-900/50 bg-black/30 p-7"
          >
            <div className="mb-6 flex items-center gap-3 text-lime-400">
              <Star />

              <h2 className="text-2xl font-bold uppercase tracking-widest">
                Skills & Interests
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "React, Next.js & JavaScript",
                "Node.js, Express & Databases",
                "Python, Java & C++",
                "Algorithms & Mathematical Reasoning",
                "Responsive Web Design",
                "Operational Systems & Automation",
                "Distance Running & Fitness",
                "Entrepreneurship & Product Building",
                "Military Operations & Leadership",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-lime-900/40 bg-black/20 px-5 py-4 text-sm font-medium text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}

          <div
            id="contact"
            className="mt-6 rounded-2xl border border-lime-900/50 bg-black/30 p-7"
          >
            <div className="mb-6 flex items-center gap-3 text-lime-400">
              <Mail />

              <h2 className="text-2xl font-bold uppercase tracking-widest">
                Contact
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-zinc-300">
              I am open to software development opportunities,
              freelance projects, collaborations, and conversations
              about practical technology solutions.
            </p>

            <div className="mt-7 grid gap-5 text-zinc-200 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-lime-500" />

                <a
                  href="mailto:bhim.b.kc90@gmail.com"
                  className="hover:text-lime-400"
                >
                  Email
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-5 w-5 items-center justify-center rounded text-xs font-bold text-lime-500">
                  in
                </span>

                <a
                  href="https://www.linkedin.com/in/bhimkc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-400"
                >
                  Linkedin
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-5 w-5 items-center justify-center rounded text-xs font-bold text-lime-500">
                  GH
                </span>

                <a
                  href="https://github.com/Bhimkc90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-400"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-lime-500" />

                New York, United States
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Bhim KC. Built with
          Next.js.
        </footer>
      </div>
    </main>
  );
}