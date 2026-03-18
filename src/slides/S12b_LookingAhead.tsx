import SlideLayout from "../components/SlideLayout";

function AutoRACTransform() {
  return (
    <div className="space-y-2">
      {/* Top row: Statute → arrow → .rac */}
      <div className="flex items-stretch gap-3">
        {/* Statute panel */}
        <div className="flex-1 bg-[#1a1a1a] border border-[#b45309] rounded-md overflow-hidden shadow-[0_0_20px_rgba(180,83,9,0.1)] flex flex-col">
          <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/10">
            <span className="w-2 h-2 bg-[#b45309] rounded-full" />
            <span className="font-mono text-xs text-white/70">
              ITA § 122.61(1)
            </span>
          </div>
          <div className="px-4 py-3 font-mono text-[0.85rem] text-white/80 leading-relaxed flex-1">
            <p>(1) &hellip; the product obtained by multiplying $6,400 by the number of qualified dependants &hellip; who have not reached the age of six years at the beginning of the month &hellip;</p>
            <p className="mt-3">(5) Each amount expressed in dollars in subsection (1) shall be adjusted so that, where the base taxation year &hellip; is after 2016, the amount to be used &hellip; is the total of &hellip; the amount &hellip; multiplied by &hellip; (A/B) &minus; 1 where A is the Consumer Price Index &hellip;</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center shrink-0">
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
            <path d="M0 10h24m0 0l-6-6m6 6l-6 6" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* RAC panel */}
        <div className="flex-1 bg-[#1a1a1a] border border-[#b45309] rounded-md overflow-hidden shadow-[0_0_20px_rgba(180,83,9,0.1)] flex flex-col">
          <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/10">
            <span className="w-2 h-2 bg-[#b45309] rounded-full" />
            <span className="font-mono text-xs text-white/70">
              statute/ca/ita/122.61/1.rac
            </span>
          </div>
          <div className="px-4 py-3 font-mono text-[0.85rem] leading-relaxed flex-1 whitespace-pre">
<span className="text-[#d4956a]">ccb_under_6_amount</span><span className="text-white/60">:</span>{"\n"}{"    "}<span className="text-[#c084fc]">from</span> <span className="text-[#7dd3fc]">2016-07-01</span><span className="text-white/60">:</span> <span className="text-white">6400</span>{"\n"}{"    "}<span className="text-[#c084fc]">from</span> <span className="text-[#7dd3fc]">2022-07-01</span><span className="text-white/60">:</span> <span className="text-white">6997</span>{"\n"}{"    "}<span className="text-[#c084fc]">from</span> <span className="text-[#7dd3fc]">2025-07-01</span><span className="text-white/60">:</span> <span className="text-white">7997</span>{"\n"}{"\n"}<span className="text-[#d4956a]">ccb_base</span><span className="text-white/60">:</span>{"\n"}{"    "}<span className="text-white/60">imports:</span>{"\n"}{"        "}<span className="text-white/60">- </span><span className="text-[#7dd3fc]">122.61/c#children</span>{"\n"}{"    "}<span className="text-white/60">entity:</span> <span className="text-white">Household</span>{"\n"}{"    "}<span className="text-[#c084fc]">from</span> <span className="text-[#7dd3fc]">2016-07-01</span><span className="text-white/60">:</span>{"\n"}{"        "}<span className="text-white">ccb_under_6_amount *</span>{"\n"}{"            "}<span className="text-white">children</span>
          </div>
        </div>
      </div>

    </div>
  );
}


export default function S12b_LookingAhead() {
  return (
    <SlideLayout variant="white" id="slide-12b">
      <div className="space-y-4">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            Looking ahead
          </h2>
          <div className="w-32 accent-bar mt-5" />
          <p className="text-lg text-gray-600 mt-3 max-w-3xl">
            The Axiom Foundation is building AutoRAC — point it at a statute,
            get validated .rac files.
          </p>
        </div>

        <AutoRACTransform />

        <div className="grid grid-cols-4 gap-4 mt-3">
          {[
            { title: "Auditable", desc: "Every parameter links directly to statute text. No magic numbers — complete transparency for government review." },
            { title: "Machine-readable", desc: "Statutes become structured data any system can parse — not humans reading PDFs. Ground truth for AI and microsimulation." },
            { title: "Cross-jurisdictional", desc: "Same format for federal, provincial, and municipal rules. Compare programs across jurisdictions consistently." },
            { title: "Reform-ready", desc: "Test policy changes with amend blocks without touching enacted law. What-if analysis becomes straightforward." },
          ].map((b) => (
            <div key={b.title} className="content-card px-5 py-4">
              <p className="font-bold text-pe-dark text-base">{b.title}</p>
              <p className="text-sm text-gray-500 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
