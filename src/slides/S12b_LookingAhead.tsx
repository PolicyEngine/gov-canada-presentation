import SlideLayout from "../components/SlideLayout";

const cycleSteps = [
  { label: "Encode", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Score", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Implement", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "Evaluate", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

function StatuteToRAC() {
  return (
    <div className="flex items-stretch gap-0">
      {/* Statute panel */}
      <div className="flex-1 bg-gray-50 border border-gray-200 rounded-l-lg overflow-hidden flex flex-col">
        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-gray-200 bg-white">
          <span className="w-2 h-2 bg-amber-500 rounded-full" />
          <span className="font-mono text-xs text-gray-500">
            ITA § 122.61(1)
          </span>
        </div>
        <div className="px-4 py-3 font-mono text-[0.8rem] text-gray-700 leading-relaxed flex-1">
          <p>&hellip; the product obtained by multiplying <strong className="text-gray-900">$6,400</strong> by the number of qualified dependants &hellip; who have not reached the age of <strong className="text-gray-900">six years</strong> at the beginning of the month &hellip;</p>
        </div>
      </div>

      {/* AutoRAC label + arrow */}
      <div className="flex flex-col items-center justify-center shrink-0 px-4">
        <span className="text-xs font-bold text-pe-teal tracking-wider uppercase mb-1">AutoRAC</span>
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
          <path d="M0 10h24m0 0l-6-6m6 6l-6 6" stroke="#2C7A7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* RAC panel */}
      <div className="flex-1 bg-blue-50/50 border border-blue-200 rounded-r-lg overflow-hidden flex flex-col">
        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-blue-200 bg-white">
          <span className="w-2 h-2 bg-[#2C7A7B] rounded-full" />
          <span className="font-mono text-xs text-gray-500">
            statute/ca/ita/122.61/1.rac
          </span>
        </div>
        <div className="px-4 py-3 font-mono text-[0.8rem] leading-relaxed flex-1 whitespace-pre text-gray-800">
<span className="text-amber-700">ccb_under_6_amount</span><span className="text-gray-400">:</span>{"\n"}{"    "}<span className="text-purple-600">from</span> <span className="text-blue-600">2016-07-01</span><span className="text-gray-400">:</span> <span className="text-gray-900">6400</span>{"\n"}{"    "}<span className="text-purple-600">from</span> <span className="text-blue-600">2017-07-01</span><span className="text-gray-400">:</span> <span className="text-gray-900">6496</span>{"\n"}{"    "}<span className="text-gray-400">...</span>{"\n"}{"    "}<span className="text-purple-600">from</span> <span className="text-blue-600">2024-07-01</span><span className="text-gray-400">:</span> <span className="text-gray-900">7787</span>{"\n"}{"    "}<span className="text-purple-600">from</span> <span className="text-blue-600">2025-07-01</span><span className="text-gray-400">:</span> <span className="text-gray-900">7997</span>{"\n"}{"\n"}<span className="text-amber-700">ccb_young_child_age</span><span className="text-gray-400">:</span>{"\n"}{"    "}<span className="text-purple-600">from</span> <span className="text-blue-600">2016-07-01</span><span className="text-gray-400">:</span> <span className="text-gray-900">6</span>{"\n"}{"\n"}<span className="text-amber-700">ccb_base</span><span className="text-gray-400">:</span>{"\n"}{"    "}<span className="text-gray-400">imports:</span>{"\n"}{"        "}<span className="text-gray-400">- </span><span className="text-blue-600">122.6#eligible_individual</span>{"\n"}{"        "}<span className="text-gray-400">- </span><span className="text-blue-600">122.6#qualified_dependant</span>{"\n"}{"    "}<span className="text-gray-400">entity:</span> <span className="text-gray-900">Household</span>{"\n"}{"    "}<span className="text-purple-600">from</span> <span className="text-blue-600">2016-07-01</span><span className="text-gray-400">:</span>{"\n"}{"        "}<span className="text-gray-900">(eligible_individual &</span>{"\n"}{"         "}<span className="text-gray-900">qualified_dependant &lt; ccb_young_child_age)</span>{"\n"}{"         "}<span className="text-gray-900">* ccb_under_6_amount</span>
        </div>
      </div>
    </div>
  );
}

function CycleArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 px-1">
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
        <path d="M0 8h22m0 0l-5-5m5 5l-5 5" stroke="#2C7A7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function S12b_LookingAhead() {
  return (
    <SlideLayout variant="white" id="slide-12b">
      <div className="space-y-5">
        {/* Header */}
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            AI enables a new paradigm of encoding
          </h2>
          <div className="w-32 accent-bar mt-5" />
          <p className="text-lg text-gray-600 mt-3 max-w-4xl">
            AI amplifies the need to encode our rules so policymakers can
            simulate change, respond in real time, and design policies that
            produce the outcomes we all want.
          </p>
        </div>

        {/* Statute → .rac panels */}
        <StatuteToRAC />

        {/* Encode → Score → Implement → Evaluate cycle */}
        <div className="flex items-center justify-center gap-0">
          {cycleSteps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="content-card px-6 py-3 flex items-center gap-3">
                <div className="icon-circle w-10 h-10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d={step.icon} />
                  </svg>
                </div>
                <span className="font-bold text-pe-dark text-base">{step.label}</span>
              </div>
              {i < cycleSteps.length - 1 && <CycleArrow />}
            </div>
          ))}
          {/* Return arrow indicating cycle repeats */}
          <div className="ml-3 flex items-center gap-2">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
              <path d="M2 4h32a4 4 0 014 4v12a4 4 0 01-4 4H8" stroke="#2C7A7B" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
              <path d="M12 28l-5-4 5-4" stroke="#2C7A7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-gray-400 font-mono">cycle repeats</span>
          </div>
        </div>

        {/* Axiom Foundation */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <img
            src={`${import.meta.env.BASE_URL}logos/axiom-foundation.svg`}
            alt="Axiom Foundation"
            className="h-8 object-contain"
          />
          <p className="text-sm text-gray-500">
            Open infrastructure for this cycle — a virtuous loop for the public good.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
