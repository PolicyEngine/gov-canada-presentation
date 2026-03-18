import SlideLayout from "../components/SlideLayout";

const highlights = [
  {
    icon: "🇬🇧",
    title: "UK Government",
    desc: "CTO embedded at 10 Downing Street — Real-time policy analysis in No 10's internal dashboards.",
  },
  {
    icon: "🇺🇸",
    title: "Rhode Island",
    desc: "Governor McKee designed his CTC with PolicyEngine — $325 credit, $36.7M cost, 29.2% of residents benefit.",
  },
  {
    icon: "🏛️",
    title: "Cross-partisan",
    desc: "Congress, think tanks, and universities — JEC, Niskanen, AEI, Georgetown, NBER, and more.",
  },
];

const logos: { name: string; file?: string }[] = [
  { name: "10 Downing Street", file: "/logos/10-downing-street.png" },
  { name: "Joint Economic Committee", file: "/logos/jec.png" },
  { name: "Bureau of Economic Analysis", file: "/logos/bea.png" },
  { name: "Niskanen Center", file: "/logos/niskanen-center.png" },
  { name: "American Enterprise Institute", file: "/logos/aei.png" },
  { name: "NBER", file: "/logos/nber.png" },
  { name: "Georgetown University", file: "/logos/georgetown.png" },
  { name: "University of Michigan", file: "/logos/umich.png" },
  { name: "USC", file: "/logos/usc.png" },
  { name: "Prenatal-to-3", file: "/logos/pn3policy.png" },
  { name: "Colorado Fiscal Institute", file: "/logos/cfi.png" },
  { name: "Gary Community Ventures", file: "/logos/gary-community-ventures.png" },
  { name: "Mothers Outreach Network", file: "/logos/mothers-outreach-network.png" },
  { name: "Atlanta Fed", file: "/logos/atlanta-fed.png" },
  { name: "Center for Growth & Opportunity", file: "/logos/cgo.png" },
  { name: "Living Wage Calculator", file: "/logos/living-wage-calculator.png" },
  { name: "UHERO", file: "/logos/uhero.png" },
  { name: "UBI Center", file: "/logos/ubicenter.png" },
  { name: "MyFriendBen", file: "/logos/myfriendben.png" },
  { name: "Amplifi", file: "/logos/amplifi.png" },
  { name: "Mirza", file: "/logos/mirza.png" },
];

export default function S07_TrackRecord() {
  return (
    <SlideLayout variant="white" id="slide-7">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            Who uses PolicyEngine?
          </h2>
          <div className="w-32 accent-bar mt-5" />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          {highlights.map((h) => (
            <div key={h.title} className="content-card p-6">
              <div className="icon-circle mb-4">
                <span className="text-2xl">{h.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-pe-dark mb-2">
                {h.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-x-5 gap-y-4 mt-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="bg-[#f9f8f6] border border-gray-200 rounded-lg p-4 flex items-center justify-center h-16"
            >
              {logo.file ? (
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="max-h-10 max-w-full object-contain"
                />
              ) : (
                <span className="text-[10px] font-medium text-gray-500 text-center leading-tight">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
