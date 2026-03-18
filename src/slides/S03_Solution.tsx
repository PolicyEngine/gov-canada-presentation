import SlideLayout from "../components/SlideLayout";

export default function S03_Solution() {
  return (
    <SlideLayout variant="warm" id="slide-3">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center">
          <div className="slide-tag mb-4">The Fourth Option</div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            Ask AI — backed by a credible
            <br />
            economic model
          </h2>
          <div className="w-32 accent-bar mt-5 mx-auto" />
        </div>

        <div className="content-card p-8 max-w-3xl w-full">
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500" />
              <div className="code-block-dot bg-yellow-500" />
              <div className="code-block-dot bg-green-500" />
              <span className="text-white/50 text-xs ml-2 font-mono">
                PolicyEngine AI
              </span>
            </div>
            <div className="code-block-content">
              <p className="text-green-400">
                &gt; What would increasing the Canada Child Benefit by $500 per
                child cost the federal government?
              </p>
              <p className="text-gray-400 mt-3">
                Based on PolicyEngine Canada microsimulation:
              </p>
              <p className="text-gray-300 mt-2">
                <span className="text-[#319795] font-semibold">
                  Budgetary cost:
                </span>{" "}
                $3.2B annually
              </p>
              <p className="text-gray-300">
                <span className="text-[#319795] font-semibold">
                  Children affected:
                </span>{" "}
                4.1M
              </p>
              <p className="text-gray-300">
                <span className="text-[#319795] font-semibold">
                  Child poverty reduction:
                </span>{" "}
                8.3%
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-3xl w-full">
          {[
            { label: "Instant", desc: "Results in seconds, not months" },
            { label: "Transparent", desc: "Fully open-source model" },
            { label: "Comprehensive", desc: "Federal + all provinces" },
          ].map((item) => (
            <div key={item.label} className="content-card p-5 text-center">
              <p className="font-bold text-pe-dark text-lg">{item.label}</p>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
