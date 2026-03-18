import SlideLayout from "../components/SlideLayout";

const federal = [
  "Personal income tax (all brackets)",
  "Canada Child Benefit (CCB)",
  "GST/HST Credit",
  "Canada Workers Benefit (CWB)",
  "Old Age Security (OAS)",
  "Guaranteed Income Supplement (GIS)",
  "Employment Insurance (EI)",
  "Canada Pension Plan (CPP/QPP)",
  "Disability Tax Credit (DTC)",
  "Climate Action Incentive Payment",
];

const provincial = [
  "Provincial income taxes (all 13 P/Ts)",
  "Ontario Trillium Benefit",
  "BC Climate Action Tax Credit",
  "Alberta Child & Family Benefit",
  "Quebec Family Allowance",
  "Saskatchewan Low-Income Tax Credit",
  "Manitoba Basic Personal Amount",
  "Nova Scotia Affordable Living Tax Credit",
  "Provincial sales tax credits",
  "Territorial northern allowances",
];

export default function S06_Coverage() {
  return (
    <SlideLayout variant="warm" id="slide-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            Comprehensive Canadian coverage
          </h2>
          <div className="w-32 accent-bar mt-5" />
        </div>

        <div className="grid grid-cols-2 gap-8 mt-2">
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-circle">
                <span className="text-[#319795] font-bold text-lg">F</span>
              </div>
              <h3 className="text-xl font-bold text-pe-dark">
                Federal programs
              </h3>
            </div>
            <ul className="space-y-2">
              {federal.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-circle">
                <span className="text-[#319795] font-bold text-lg">P</span>
              </div>
              <h3 className="text-xl font-bold text-pe-dark">
                Provincial &amp; territorial
              </h3>
            </div>
            <ul className="space-y-2">
              {provincial.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-2">
          {[
            { num: "1,500+", label: "Policy variables" },
            { num: "13", label: "Provinces & territories" },
            { num: "338", label: "Federal ridings" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-pe-teal/5 border border-pe-teal/20 rounded-xl px-8 py-4 text-center"
            >
              <p className="stat-number text-3xl">{s.num}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
