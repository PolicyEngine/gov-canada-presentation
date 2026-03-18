import SlideLayout from "../components/SlideLayout";

const canadaNow = [
  {
    category: "Household analysis",
    q: "Calculate the household net income for a single parent earning $45,000 in BC.",
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
    category: "Poverty impact",
    q: "How many children would be lifted out of poverty?",
  },
  {
    category: "Comparison",
    q: "Compare EITC expansion to a $200/mo UBI",
  },
  {
    category: "Tax analysis",
    q: "Show me marginal tax rates under this reform",
  },
  {
    category: "Reform scoring",
    q: "Repealing the SALT cap on the top decile?",
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
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Every answer is backed by microsimulation on survey data — not LLM guesswork.
        </p>
      </div>
    </SlideLayout>
  );
}
