import React from "react";
import { ArrowUpRight, Thermometer, BarChart3, TrendingUp, Activity, Home } from "lucide-react";

const PROJECTS = [
  {
    title: "Temperature Prediction",
    icon: Thermometer,
    desc:
      "Built a regression model to forecast daily temperatures using historical climate data. Cleaned and engineered weather signals, evaluated multiple models and visualized predictions vs. actuals to validate performance.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    accent: "from-[#4d8bff] to-[#22d3ee]",
  },
  {
    title: "Quantity Analysis",
    icon: BarChart3,
    desc:
      "Analyzed sales and inventory quantities across categories to surface demand trends, identify slow-moving items and recommend smarter stocking strategies with clear, story-driven visualizations.",
    tech: ["Python", "Pandas", "Seaborn", "EDA"],
    accent: "from-[#6ea8fe] to-[#4d8bff]",
  },
  {
    title: "Time Series Data Analysis",
    icon: TrendingUp,
    desc:
      "Explored seasonality, trend and noise in time-indexed data using decomposition, rolling averages and visualization. Surfaced patterns useful for forecasting and anomaly spotting.",
    tech: ["Python", "NumPy", "Matplotlib", "Statsmodels"],
    accent: "from-[#22d3ee] to-[#4d8bff]",
  },
  {
    title: "COVID-19 Impact in India",
    icon: Activity,
    desc:
      "Built an interactive analytics dashboard in IBM Cognos to visualize state-level COVID-19 impact across cases, recoveries and deaths — turning raw public data into a clear executive view.",
    tech: ["IBM Cognos", "Data Viz", "Storytelling", "Analytics"],
    accent: "from-[#4d8bff] to-[#6ea8fe]",
  },
  {
    title: "House Price Prediction",
    icon: Home,
    desc:
      "Trained supervised regression models to predict house prices from structural, locational and market features. Compared algorithms, tuned hyperparameters and evaluated with RMSE / R².",
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    accent: "from-[#6ea8fe] to-[#22d3ee]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad" data-testid="projects-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">Projects</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
              Selected <span className="text-gradient">work</span> &amp; case studies.
            </h2>
          </div>
          <p className="text-[color:var(--ink-soft)] max-w-md">
            A snapshot of projects that show my data analysis and modeling workflow — from raw
            data to deployable insight.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-7">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} index={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ index, project }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article
      data-testid={`project-card-${index}`}
      className="glass-strong rounded-3xl p-6 sm:p-7 card-hover flex flex-col relative overflow-hidden"
    >
      <div
        className={`relative h-44 sm:h-52 rounded-2xl bg-gradient-to-br ${project.accent} overflow-hidden flex items-center justify-center`}
      >
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.55), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.30), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(transparent 0 calc(100% - 1px), rgba(255,255,255,0.4) 0), linear-gradient(90deg, transparent 0 calc(100% - 1px), rgba(255,255,255,0.4) 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <project.icon className="text-white/95 drop-shadow relative z-10" size={56} strokeWidth={1.6} />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-black/35 text-white/90 backdrop-blur">
          Case Study
        </span>
      </div>

      <div className="mt-5 font-mono-sm text-[color:var(--brand-2)]">
        Project — {num}
      </div>
      <h3 className="mt-1 font-display text-2xl sm:text-3xl leading-tight">{project.title}</h3>

      <p className="mt-3 text-[color:var(--ink-soft)] text-sm leading-relaxed">
        {project.desc}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide chip"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <button
          data-testid={`project-learn-more-${index}`}
          onClick={() =>
            window.open("https://github.com/shikhayadav29", "_blank", "noreferrer")
          }
          className="learn-more-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold group"
        >
          Learn More
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </article>
  );
}
