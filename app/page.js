"use client";

import React, { useState } from "react";
import {
  Download,
  Grid2X2,
  Mail,
  MapPin,
  Code2,
  Network,
  Sigma,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  Star,
} from "lucide-react";

const experienceDetails = {
  "Software Engineering": [
    "Built multiple software projects using React, Node.js, Next.js, and Tailwind CSS.",
    "Strong knowledge of HTML, CSS, JavaScript, and modern frontend development.",
    "Experience designing and creating databases for application systems.",
    "Worked with MySQL, Oracle Database, and PostgreSQL.",
    "Programming experience with Java, C++, and Python.",
    "Able to write code, structure systems, design data models, and connect frontend, backend, and database layers.",
  ],
  "Project Management": [
    "Experienced in leading projects from planning through execution.",
    "Able to define project specifications and break large projects into smaller manageable tasks.",
    "Experience distributing work to team members based on responsibilities and capability.",
    "Tracked team progress, organized meetings, and communicated project status.",
    "Focused on meeting deadlines and ensuring each team member understands assigned tasks.",
    "Led, mentored, coached, and managed staff while providing resources and removing obstacles.",
    "Experienced in planning, building projects, solving problems, and communicating with stakeholders.",
  ],
  "Mathematics & Analytics": [
    "Extensive mathematics background through Calculus IV, abstract algebra, differential equations, and statistics.",
    "Strong mathematical problem-solving ability across multiple areas of applied and theoretical mathematics.",
    "Able to understand key mathematical concepts that support algorithms and computational problem solving.",
    "Experienced applying analytical thinking to data, systems, decision-making, and software logic.",
    "Provided tutoring support in mathematics including algebra, calculus, statistics, and analytical problem solving.",
    "Tutored basic computer science concepts including programming fundamentals, logic, and problem-solving approaches.",
  ],
  "Military Professional": [
    "Squad Leader: led, trained, coached, counseled, and mentored 8 to 30 Soldiers while supporting career growth, fitness planning, discipline, and standards compliance.",
    "CVS Officer: processed and certified contractor payments while ensuring financial transactions and large budgets were managed accurately.",
    "Unit Movement Officer: supported mobilization planning by entering inventory and equipment data, tracking movement requirements, maintaining accountability, and coordinating logistics.",
    "Supply NCO: managed mission supply operations including equipment, vehicles, mileage logs, lodging, meals, logistics, and mission support resources.",
    "Admin NCO: supported accountability, pay, leave, personnel tracking, and administrative requirements for Soldiers.",
    "Information Management Officer: supported computer setup, laptop imaging, software installation, troubleshooting, networking, and system connectivity between platforms.",
    "Certifier: reviewed transactions completed by junior Soldiers, verified documents, and certified financial transactions for accuracy.",
    "Financial Clerk: managed accounting tasks, cash distribution, training data entry, systems updates, and customer service support.",
  ],
};

const projects = [
  {
    title: "RuckOn Fitness",
    description:
      "Military fitness tracking, ACFT scoring, workout planning, and performance analytics.",
    link: "https://www.ruckonfitness.com/",
    tags: ["Fitness", "Military", "Analytics"],
  },
  {
    title: "MilPayRuck",
    description:
      "Military pay and finance optimization concept for service members.",
    link: "#",
    tags: ["Finance", "Military", "Product"],
  },
  {
    title: "Trackademia",
    description:
      "Academic and performance tracking concept focused on progress and analytics.",
    link: "#",
    tags: ["Education", "Tracking", "Analytics"],
  },
];

function ExperienceCard({ icon: Icon, title, children, active, onClick }) {
  return (
    <div className="rounded-2xl border border-lime-900/50 bg-black/30 p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-lime-500/60 hover:bg-lime-950/20">
      <Icon className="mb-6 h-9 w-9 text-lime-500" />
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="min-h-24 text-sm leading-7 text-zinc-300">{children}</p>
      <button
        type="button"
        onClick={onClick}
        className="mt-6 text-sm font-semibold uppercase tracking-wide text-lime-400 transition hover:text-lime-300"
      >
        {active ? "Hide Details" : "Explore More"} <span className="ml-2">→</span>
      </button>
    </div>
  );
}

export default function PortfolioHomepage() {
  const [activeExperience, setActiveExperience] = useState("Project Management");

  const experiences = [
    {
      icon: Code2,
      title: "Software Engineering",
      summary:
        "Building efficient, scalable and user-focused applications using modern technologies.",
    },
    {
      icon: Network,
      title: "Project Management",
      summary:
        "Planning, executing and delivering projects with leadership, coordination and an Agile mindset.",
    },
    {
      icon: Sigma,
      title: "Mathematics & Analytics",
      summary:
        "Applied mathematics, problem solving, data analysis and modeling for decision making.",
    },
    {
      icon: ShieldCheck,
      title: "Military Professional",
      summary:
        "Leadership, discipline and operational experience gained through military service and deployments.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(132,204,22,0.18),transparent_35%),radial-gradient(circle_at_15%_30%,rgba(202,138,4,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-between border-b border-white/10 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime-600/40 bg-black/40 text-lime-400">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-wide">BKC</div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-500">
                E6 / SSG
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
            href="/resume.pdf"
            className="hidden items-center gap-2 rounded-lg border border-lime-600/70 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-lime-300 transition hover:bg-lime-500 hover:text-black md:flex"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </nav>

        <section
          id="about"
          className="grid min-h-[620px] items-center gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <div className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-lime-500">
              Introduction <span className="h-px w-20 bg-lime-700/70" />
            </div>

            <h1 className="max-w-4xl text-6xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
              Bhim Bahadur KC
            </h1>

            <p className="mt-7 text-lg font-medium text-lime-300">
              Project Management <span className="mx-3 text-lime-700">•</span>
              Technology <span className="mx-3 text-lime-700">•</span>
              Military Operations <span className="mx-3 text-lime-700">•</span>
              Analytics
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              Military professional and aspiring project manager with a background in military finance,
              software engineering, mathematics, and operational leadership. Experienced in managing
              responsibilities in fast-paced environments, coordinating teams, solving analytical problems,
              and developing technology-focused solutions. Passionate about leading projects that integrate
              technology, operations, and strategic planning.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-lg bg-lime-700 px-6 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-lime-950 transition hover:bg-lime-600"
              >
                <Grid2X2 className="h-5 w-5" /> View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-3 rounded-lg border border-lime-700 px-6 py-4 font-bold uppercase tracking-wide text-lime-200 transition hover:bg-lime-500 hover:text-black"
              >
                <Download className="h-5 w-5" /> Download Resume
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-5 text-sm sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lime-400">Military Professional</div>
                <div className="font-semibold text-white">U.S. Army</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lime-400">Current Rank</div>
                <div className="font-semibold text-white">E6 / SSG</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lime-400">Based In</div>
                <div className="font-semibold text-white">United States</div>
              </div>
            </div>
          </div>

          <div className="hidden rounded-3xl border border-lime-900/50 bg-black/30 p-8 shadow-2xl shadow-black/50 backdrop-blur lg:block">
            <div className="grid gap-6">
              <div className="rounded-2xl border border-lime-700/40 bg-black/35 p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-lime-500">
                  Mission Focus
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-300">
                  <li>+ Leadership</li>
                  <li>+ Planning</li>
                  <li>+ Execution</li>
                  <li>+ Results</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-lime-950/60 to-black/20 p-8">
                <div className="text-7xl font-black leading-none text-white/10">BKC</div>
                <p className="mt-4 text-lg leading-8 text-zinc-200">
                  Discipline, leadership, technology, and analytical thinking applied to real-world project
                  execution.
                </p>
              </div>

              <div className="rounded-2xl border border-lime-700/40 bg-black/35 p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-lime-500">
                  Operations Overview
                </div>
                <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                  <div>01 → Plan</div>
                  <div>02 → Coordinate</div>
                  <div>03 → Execute</div>
                  <div>04 → Evaluate</div>
                  <div>05 → Improve</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-10">
          <div className="mb-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-lime-500">
            Experience <span className="h-px w-20 bg-lime-700/70" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item) => (
              <ExperienceCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                active={activeExperience === item.title}
                onClick={() =>
                  setActiveExperience(activeExperience === item.title ? "" : item.title)
                }
              >
                {item.summary}
              </ExperienceCard>
            ))}
          </div>

          {activeExperience && (
            <div className="mt-6 rounded-2xl border border-lime-900/60 bg-black/40 p-7 shadow-lg shadow-black/20">
              <h3 className="text-2xl font-bold text-white">{activeExperience}</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-zinc-300 md:grid-cols-2">
                {experienceDetails[activeExperience].map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-lime-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section id="projects" className="grid gap-6 border-t border-white/10 py-12 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-2xl border border-lime-900/50 bg-black/30 p-6">
              <BriefcaseBusiness className="mb-5 h-8 w-8 text-lime-500" />
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-lime-300">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-lime-950 px-3 py-1">
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
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </section>

        <section className="border-t border-white/10 py-12">
          <div id="education" className="rounded-2xl border border-lime-900/50 bg-black/30 p-7">
            <div className="mb-6 flex items-center gap-3 text-lime-400">
              <GraduationCap />
              <h2 className="text-2xl font-bold uppercase tracking-widest">Education</h2>
            </div>

            <div className="space-y-8 border-l border-lime-800 pl-6">
              <div>
                <div className="text-sm text-zinc-400">
                  Queens College, City University of New York
                </div>
                <div className="mt-1 text-xl font-bold">
                  Bachelor&apos;s Degree in Computer Science & Applied Mathematics
                </div>
              </div>

              <div>
                <div className="text-sm text-zinc-400">LaGuardia Community College</div>
                <div className="mt-1 text-xl font-bold">
                  Associate Degree in Liberal Arts: Math & Science
                </div>
              </div>

              <div>
                <div className="text-sm text-zinc-400">Additional Training</div>
                <div className="mt-1 text-xl font-bold">
                  Army Leadership, Finance and Technical Courses
                </div>
              </div>
            </div>
          </div>

          <div id="interests" className="mt-6 rounded-2xl border border-lime-900/50 bg-black/30 p-7">
            <div className="mb-6 flex items-center gap-3 text-lime-400">
              <Star />
              <h2 className="text-2xl font-bold uppercase tracking-widest">Interests</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Distance Running & Military Fitness",
                "Puzzle Solving & Analytical Thinking",
                "Technology & Product Development",
                "Leadership & Mentorship",
                "Entrepreneurship & Operational Systems",
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

          <div id="certifications" className="mt-6 rounded-2xl border border-lime-900/50 bg-black/30 p-7">
            <div className="mb-6 flex items-center gap-3 text-lime-400">
              <GraduationCap />
              <h2 className="text-2xl font-bold uppercase tracking-widest">Certifications</h2>
            </div>

            <div className="rounded-2xl border border-dashed border-lime-700/50 bg-black/20 p-8 text-center">
              <p className="text-lg font-semibold text-white">Project Management Certifications</p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Future certifications such as Project Management, Agile, Scrum, and technical certifications
                can be uploaded and displayed here with downloadable and viewable certificate previews.
              </p>
              <button
                type="button"
                className="mt-6 rounded-lg border border-lime-700 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-lime-300 transition hover:bg-lime-500 hover:text-black"
              >
                Upload Certificate
              </button>
            </div>
          </div>

          <div id="contact" className="mt-6 rounded-2xl border border-lime-900/50 bg-black/30 p-7">
            <div className="mb-6 flex items-center gap-3 text-lime-400">
              <Mail />
              <h2 className="text-2xl font-bold uppercase tracking-widest">Contact</h2>
            </div>

            <div className="space-y-5 text-zinc-200">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-lime-500" />
                <a href="mailto:bhim.b.kc90@gmail.com" className="hover:text-lime-400">
                  bhim.b.kc90@gmail.com
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
                  linkedin.com/in/bhimkc
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
                  github.com/Bhimkc90
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-lime-500" /> United States
              </div>
            </div>

            <div id="resume" className="mt-10 rounded-2xl border border-dashed border-lime-700/50 bg-black/20 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Resume</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Upload your resume as <span className="font-semibold text-lime-300">resume.pdf</span> inside the
                    public folder so visitors can download it directly.
                  </p>
                </div>

                <a
                  href="/resume.pdf"
                  download
                  className="rounded-lg bg-lime-700 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-lime-600"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <a
              href="mailto:bhim.b.kc90@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-lg border border-lime-700 px-6 py-3 font-bold uppercase tracking-wide text-lime-300 hover:bg-lime-500 hover:text-black"
            >
              <Star className="h-4 w-4" /> Get In Touch
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
