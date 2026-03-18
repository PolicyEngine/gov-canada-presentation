import SlideLayout from "../components/SlideLayout";

const columns = [
  {
    title: "Policies",
    bg: "bg-[#319795]",
    items: [
      "Federal income tax",
      "Canada Child Benefit (CCB)",
      "Canada Workers Benefit (CWB)",
      "Old Age Security (OAS)",
      "CPP retirement pension",
      "Child Disability Benefit",
      "10+ federal tax credits",
      "Provincial income taxes",
      "Provincial child benefits (ON, BC, AB, SK, YT)",
    ],
  },
{
    title: "Roadmap",
    bg: "bg-[#234E52]",
    items: [
      "GST/HST Credit (including provincial breakdown)",
      "GIS & Spousal Allowance",
      "EI benefits (beyond stubs)",
      "Real survey microdata",
      "Remaining province build-out",
      "Behavioural responses",
    ],
  },
];

export default function S05_Platform() {
  return (
    <SlideLayout variant="white" id="slide-5">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            PolicyEngine Canada
          </h2>
          <div className="w-32 accent-bar mt-5" />
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            An open-source microsimulation model covering federal and provincial
            tax-benefit systems — static analysis today, dynamics coming next.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-2">
          {columns.map((col) => (
            <div key={col.title} className="content-card overflow-hidden">
              <div className={`${col.bg} px-5 py-3`}>
                <h3 className="text-white font-bold text-lg">{col.title}</h3>
              </div>
              <ul className="p-5 space-y-2">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-pe-teal/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2">
          {[
            { num: "6", label: "Provinces/territories deep coverage", detail: "ON, BC, QC, AB, NS, YT" },
            { num: "7", label: "Provinces/territories in progress", detail: "NB, SK, MB, NL, PE, NT, NU" },
            { num: "250+", label: "Variables with formulas" },
            { num: "US + UK", label: "Models also available" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-pe-teal/5 border border-pe-teal/20 rounded-xl px-5 py-3 text-center"
            >
              <p className="stat-number text-2xl">{s.num}</p>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
              {"detail" in s && <p className="text-gray-400 text-[0.65rem] mt-0.5">{s.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
