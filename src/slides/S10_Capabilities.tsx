import SlideLayout from "../components/SlideLayout";

const canadaNow = [
  {
    category: "Household analysis",
    q: "Calculate the effective marginal tax rate for a single parent earning $45,000 in BC.",
  },
  {
    category: "Benefit eligibility",
    q: "How much CCB and CWB would a family of four with $60,000 income receive?",
  },
  {
    category: "Policy comparison",
    q: "Compare net income under current law vs. a $500 CCB increase for a couple in Ontario.",
  },
  {
    category: "Provincial differences",
    q: "How does the tax burden differ for a $90,000 earner in Alberta vs. Nova Scotia?",
  },
];

const usUkToday = [
  {
    category: "Budget scoring",
    q: "What would expanding the EITC to $1,500 cost the US federal government?",
  },
  {
    category: "Distributional",
    q: "Show me winners and losers of the One Big Beautiful Bill Act by income decile.",
  },
  {
    category: "Poverty impact",
    q: "How would doubling the UK child element affect child poverty rates?",
  },
  {
    category: "Population analysis",
    q: "How many families in Rhode Island would benefit from the new state CTC?",
  },
];

export default function S10_Capabilities() {
  return (
    <SlideLayout variant="warm" id="slide-10">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            What you can ask
          </h2>
          <div className="w-32 accent-bar mt-5" />
        </div>

        <div className="grid grid-cols-2 gap-8 mt-2">
          {/* Canada column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇨🇦</span>
              <h3 className="text-lg font-bold text-pe-dark">
                Canada — household analysis today
              </h3>
            </div>
            <div className="space-y-3">
              {canadaNow.map((p) => (
                <div
                  key={p.category}
                  className="content-card p-4 border border-pe-teal/20"
                >
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pe-teal/10 text-[#2C7A7B] uppercase tracking-wide">
                    {p.category}
                  </span>
                  <p className="text-sm text-gray-700 mt-2 font-medium leading-relaxed">
                    "{p.q}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* US/UK column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇺🇸🇬🇧</span>
              <h3 className="text-lg font-bold text-pe-dark">
                US &amp; UK — full microsimulation
              </h3>
            </div>
            <div className="space-y-3">
              {usUkToday.map((p) => (
                <div
                  key={p.category}
                  className="content-card p-4 border border-blue-200"
                >
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 uppercase tracking-wide">
                    {p.category}
                  </span>
                  <p className="text-sm text-gray-700 mt-2 font-medium leading-relaxed">
                    "{p.q}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Every answer is backed by microsimulation — not LLM guesswork.
        </p>
      </div>
    </SlideLayout>
  );
}
