import SlideLayout from "../components/SlideLayout";

const items = [
  {
    title: "Federal tax-benefit system",
    desc: "Income tax, GST/HST credit, Canada Child Benefit, CPP/EI, and OAS/GIS fully modelled.",
    icon: "🏛️",
  },
  {
    title: "6 provinces with deep coverage",
    desc: "Ontario, BC, Quebec, Alberta, Nova Scotia, and Yukon — provincial taxes, child benefits, and credits.",
    icon: "🍁",
  },
  {
    title: "3 provinces in progress",
    desc: "New Brunswick, Saskatchewan, and Manitoba have tax and selected benefit implementations.",
    icon: "🔧",
  },
  {
    title: "Quebec special status",
    desc: "QPP instead of CPP, provincial income tax, and Quebec-specific benefit parameters.",
    icon: "⚜️",
  },
  {
    title: "Remaining provinces & territories",
    desc: "NL, PE, NT, and NU have basic tax scaffolding — ready for full implementation.",
    icon: "📋",
  },
  {
    title: "Open source & auditable",
    desc: "No PII required — uses synthetic & aggregate microdata. Fully transparent methodology.",
    icon: "🔒",
  },
];

export default function S12_CanadaSpecific() {
  return (
    <SlideLayout variant="warm" id="slide-12">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            PolicyEngine Canada today
          </h2>
          <div className="w-32 accent-bar mt-5" />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          {items.map((item) => (
            <div key={item.title} className="content-card p-6">
              <div className="icon-circle mb-4">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-pe-dark mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
