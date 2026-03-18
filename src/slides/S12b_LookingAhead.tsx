import { useState, useEffect } from "react";
import SlideLayout from "../components/SlideLayout";

const cycleSteps = [
  { label: "Encode", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Score", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Implement", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "Evaluate", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

function StatuteToRAC() {
  const [tab, setTab] = useState<"statute" | "rac">("statute");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setTab((t) => (t === "statute" ? "rac" : "statute"));
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const handleTab = (t: "statute" | "rac") => {
    return (e: React.MouseEvent) => {
      e.stopPropagation();
      setTab(t);
      setPaused(true);
      setTimeout(() => setPaused(false), 10000);
    };
  };

  return (
    <div className="flex flex-col items-center">
      {/* Single panel with tabbed header */}
      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg border border-amber-900/30">
        {/* Split tab header */}
        <div className="flex">
          <button
            onClick={handleTab("statute")}
            className={`flex-1 px-5 py-2.5 flex items-center justify-center transition-colors cursor-pointer border-0 ${
              tab === "statute"
                ? "bg-[#6b4c2a]"
                : "bg-[#4a3520] hover:bg-[#5a4028]"
            }`}
          >
            <span className={`font-mono text-sm ${tab === "statute" ? "text-white" : "text-white/50"}`}>ITA § 122.61(1)(a)</span>
          </button>
          <button
            onClick={handleTab("rac")}
            className={`flex-1 px-5 py-2.5 flex items-center justify-center transition-colors cursor-pointer border-0 ${
              tab === "rac"
                ? "bg-[#6b4c2a]"
                : "bg-[#4a3520] hover:bg-[#5a4028]"
            }`}
          >
            <span className={`font-mono text-sm ${tab === "rac" ? "text-white" : "text-white/50"}`}>statute/ca/ita/122.61/1.rac</span>
          </button>
        </div>
        {/* Accent line under active tab */}
        <div className="flex">
          <div className={`flex-1 h-0.5 ${tab === "statute" ? "bg-amber-500" : "bg-transparent"}`} />
          <div className={`flex-1 h-0.5 ${tab === "rac" ? "bg-amber-500" : "bg-transparent"}`} />
        </div>

        {/* Body */}
        <div className={`px-8 py-6 min-h-[280px] ${tab === "statute" ? "bg-gradient-to-br from-amber-800/90 to-amber-900/95" : "bg-[#1a1a1a]"}`}>
          {tab === "statute" ? (
            <p className="font-serif text-[1.05rem] text-white/85 leading-relaxed italic">
              (a) the product obtained by multiplying $6,400 by the number of
              qualified dependants in respect of whom the person was an eligible
              individual at the beginning of the month who have not reached the
              age of six years at the beginning of the month, and
            </p>
          ) : (
            <div className="font-mono text-[0.9rem] leading-relaxed whitespace-pre text-white/90">
<span className="text-[#d4956a]">ccb_under_6_amount</span><span className="text-white/40">:</span>{"\n"}{"    "}<span className="text-[#c084fc]">from</span> <span className="text-[#7dd3fc]">2016-07-01</span><span className="text-white/40">:</span> <span className="text-white">6400</span>{"\n"}{"\n"}<span className="text-[#d4956a]">ccb_young_child_age</span><span className="text-white/40">:</span>{"\n"}{"    "}<span className="text-[#c084fc]">from</span> <span className="text-[#7dd3fc]">2016-07-01</span><span className="text-white/40">:</span> <span className="text-white">6</span>{"\n"}{"\n"}<span className="text-[#d4956a]">ccb_base</span><span className="text-white/40">:</span>{"\n"}{"    "}<span className="text-white/40">imports:</span>{"\n"}{"        "}<span className="text-white/40">- </span><span className="text-[#7dd3fc]">122.6#eligible_individual</span>{"\n"}{"        "}<span className="text-white/40">- </span><span className="text-[#7dd3fc]">122.6#qualified_dependant</span>{"\n"}{"    "}<span className="text-white/40">entity:</span> <span className="text-white">Household</span>{"\n"}{"    "}<span className="text-[#c084fc]">from</span> <span className="text-[#7dd3fc]">2016-07-01</span><span className="text-white/40">:</span>{"\n"}{"        "}<span className="text-white">(eligible_individual &</span>{"\n"}{"         "}<span className="text-white">qualified_dependant &lt; ccb_young_child_age)</span>{"\n"}{"         "}<span className="text-white">* ccb_under_6_amount</span>
            </div>
          )}
        </div>
      </div>

      {/* Caption */}
      <p className="mt-3 font-mono text-xs text-gray-400 tracking-[0.2em] uppercase">
        Same law, two representations
      </p>
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
