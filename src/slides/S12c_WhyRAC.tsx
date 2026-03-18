import SlideLayout from "../components/SlideLayout";

const benefits = [
  {
    title: "Auditable & traceable",
    desc: "Every parameter links directly to statute text. No magic numbers — complete transparency for government review.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-pe-teal">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Temporal versioning",
    desc: "Built-in from clauses track how law changes over time. One file captures the full history of a provision — indexing, amendments, sunsets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-pe-teal">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cross-jurisdictional",
    desc: "Same format for federal, provincial, and municipal rules. Compare programs across jurisdictions with a unified structure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-pe-teal">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Reform modeling",
    desc: "Test policy changes with amend blocks — without touching enacted law. What-if analysis becomes straightforward.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-pe-teal">
        <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ground truth for AI",
    desc: "Millions of verifiable (situation, correct answer) pairs grounded in actual statute — not synthetic data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-pe-teal">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Self-contained files",
    desc: "Statute text, parameters, and formulas in one file. Complete logic visible and reviewable in a single place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-pe-teal">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function S12c_WhyRAC() {
  return (
    <SlideLayout variant="white" id="slide-12c">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            Why encode statutes?
          </h2>
          <div className="w-32 accent-bar mt-5" />
        </div>

        <div className="grid grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="content-card p-5">
              <div className="mb-3">{b.icon}</div>
              <h3 className="text-lg font-bold text-pe-dark mb-1.5">
                {b.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
