export default function Portfolio() {
  const profile = {
    name: "Bhim KC",
    role: "Project Manager • Product Builder • Military Leader",
    headline: "Military leader, finance-minded builder, and project-driven technologist.",
    subheadline:
      "12+ years of military background, strong finance understanding, and a foundation in Computer Science and Applied Mathematics. Building practical products in military fitness and finance while pursuing high-impact project and product opportunities.",
    email: "bhim.b.kc90@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhimkc/",
    github: "https://github.com/Bhimkc90",
    image: "/profile.jpg",
    hero: "/hero.jpg",
  };

  const stats = [
    { value: "12+", label: "Years Military Background" },
    { value: "CS + Math", label: "Academic Foundation" },
    { value: "2", label: "Core Products in Progress" },
  ];

  const highlights = [
    {
      title: "Military Leadership",
      text: "Experienced in accountability, mission execution, operational discipline, and leading people in demanding environments.",
    },
    {
      title: "Finance Understanding",
      text: "Strong interest in military pay systems, financial logic, budgeting, and building useful financial tools with practical value.",
    },
    {
      title: "Technical Builder",
      text: "Grounded in Computer Science and Applied Mathematics with a focus on structured problem-solving, product thinking, and execution.",
    },
  ];

  const experience = [
    {
      title: "Military Service and Leadership",
      period: "12+ Years",
      text: "Built leadership, planning, accountability, and execution skills through years of service in mission-focused environments.",
    },
    {
      title: "Computer Science and Applied Mathematics",
      period: "Academic Foundation",
      text: "Developed technical depth in systems, software, and analytical thinking that now supports real-world product development.",
    },
    {
      title: "Independent Product Builder",
      period: "Current Focus",
      text: "Designing and building practical software products in military fitness and military finance with long-term entrepreneurial intent.",
    },
  ];

  const projects = [
    {
      title: "RuckOn Fitness",
      tag: "Military Fitness Platform",
      link: "https://ruckonfitness.com",
      image: "/projects/ruckonfitness-thumb.jpg",
      description:
        "A product focused on helping military personnel track readiness, improve performance, and build consistency through structured fitness tools.",
    },
    {
      title: "MilPayRuck",
      tag: "Military Pay and Finance Tool",
      link: "#",
      image: "/projects/milpayruck-thumb.jpg",
      description:
        "A financial platform concept designed to make military pay, allowances, and planning easier to understand and use in everyday decisions.",
    },
  ];

  return (
    <div className="bg-[#ece8e1] text-[#25282d] antialiased">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#home"
            className="border border-white/40 bg-black/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md"
          >
            Bhim KC
          </a>
          <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.hero})` }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_28%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-28 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
            <div className="flex flex-col justify-center text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/70">
                {profile.role}
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-light uppercase tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
                Bhim KC
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-white/92 sm:text-2xl">
                {profile.headline}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                {profile.subheadline}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-black transition duration-300 hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="border border-white/70 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-[6px] border-white/90 shadow-2xl">
                  <img
                    src={profile.image}
                    alt="Bhim KC profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-8 border-t border-white/15 pt-6 text-center text-white">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-white/60">Current Positioning</p>
                  <p className="mt-4 text-base leading-7 text-white/85">
                    A disciplined builder combining military leadership, technical structure, finance awareness, and entrepreneurial execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e5ddd1] py-8">
          <div className="mx-auto grid max-w-7xl gap-px bg-black/10 px-6 md:grid-cols-3 lg:px-10">
            {stats.map((item) => (
              <div key={item.label} className="bg-[#f6f2eb] px-6 py-8 text-center">
                <p className="text-3xl font-light text-[#23262c] sm:text-4xl">{item.value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#81776d]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8c8176]">About</p>
            <h2 className="mt-4 text-4xl font-light uppercase tracking-[0.12em] text-[#23262c] sm:text-5xl">
              Built on discipline, analysis, and execution
            </h2>
            <div className="mx-auto mt-8 h-[2px] w-24 bg-[#23262c]" />
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8d8379]">Profile</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#50555d] sm:text-base">
                <li>12+ years of military background and leadership experience</li>
                <li>Strong finance understanding and interest in military financial systems</li>
                <li>Academic background in Computer Science and Applied Mathematics</li>
                <li>Building military-focused products with long-term entrepreneurial intent</li>
              </ul>
            </div>

            <div>
              <p className="text-lg leading-9 text-[#41464d] sm:text-xl">
                I am focused on the space where leadership, technology, and practical problem-solving meet. My background combines years of military service, analytical training in mathematics and computer science, and a builder mindset centered on creating real products that solve meaningful problems.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="border border-black/8 bg-white/60 p-8 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8d8379]">{item.title}</p>
                <p className="mt-5 text-sm leading-8 text-[#565b62]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-[#f7f3ed] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8c8176]">Experience</p>
              <h2 className="mt-4 text-4xl font-light uppercase tracking-[0.12em] text-[#23262c] sm:text-5xl">
                Background that supports leadership and product building
              </h2>
              <div className="mx-auto mt-8 h-[2px] w-24 bg-[#23262c]" />
            </div>

            <div className="mt-16 space-y-8">
              {experience.map((item) => (
                <div key={item.title} className="grid gap-5 border-b border-black/10 pb-8 md:grid-cols-[180px_1fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8c8176]">{item.period}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light uppercase tracking-[0.1em] text-[#23262c]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-sm leading-8 text-[#5b6168] sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8c8176]">Projects</p>
            <h2 className="mt-4 text-4xl font-light uppercase tracking-[0.12em] text-[#23262c] sm:text-5xl">
              Product work in motion
            </h2>
            <div className="mx-auto mt-8 h-[2px] w-24 bg-[#23262c]" />
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : "_self"}
                rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                className="group overflow-hidden border border-black/10 bg-[#17191e] text-white shadow-xl transition duration-500 hover:-translate-y-1"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                      {project.tag}
                    </p>
                    <h3 className="mt-3 text-3xl font-light uppercase tracking-[0.08em] text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-8 text-white/78">{project.description}</p>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    Open Project ↗
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[#242932] px-6 py-24 text-white lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b8a68a]">Contact</p>
            <h2 className="mt-4 text-4xl font-light uppercase tracking-[0.12em] text-white sm:text-5xl">
              Let’s connect
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/72 sm:text-base">
              Open to project management, product-focused opportunities, and conversations around building meaningful tools in military fitness and finance.
            </p>

            <div className="mx-auto mt-12 grid max-w-3xl gap-px bg-white/10 text-left md:grid-cols-3">
              <a
  href={`mailto:${profile.email}?subject=Portfolio Inquiry`}
  className="block bg-white/5 p-6 transition hover:bg-white/10 cursor-pointer"
>
  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
    Email
  </p>
  <p className="mt-3 text-sm break-all text-white/90">
    {profile.email}
  </p>
</a>
              <a href={profile.linkedin} className="bg-white/5 p-6 transition hover:bg-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">LinkedIn</p>
                <p className="mt-3 text-sm text-white/90">View Profile</p>
              </a>
              <a href={profile.github} className="bg-white/5 p-6 transition hover:bg-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">GitHub</p>
                <p className="mt-3 text-sm text-white/90">View Projects</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
