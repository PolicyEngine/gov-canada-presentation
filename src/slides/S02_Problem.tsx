import SlideLayout from "../components/SlideLayout";

const problems = [
  {
    icon: "📊",
    title: "Commission a study",
    tag: "Slow",
    tagColor: "bg-amber-100 text-amber-800",
    items: [
      "6–12 month turnaround",
      "Costly external consultants",
      "Black-box methodology",
      "Outdated by release date",
    ],
  },
  {
    icon: "🏛️",
    title: "Internal modelling",
    tag: "Siloed",
    tagColor: "bg-blue-100 text-blue-800",
    items: [
      "Limited to one department",
      "Proprietary, closed tools",
      "Difficult cross-ministry sharing",
      "Hard to reproduce results",
    ],
  },
  {
    icon: "📋",
    title: "Staffer estimation",
    tag: "Uncertain",
    tagColor: "bg-purple-100 text-purple-800",
    items: [
      "Spreadsheet-based guesses",
      "No behavioural dynamics",
      "Not credible for Treasury Board",
      "Doesn't scale across provinces",
    ],
  },
];

export default function S02_Problem() {
  return (
    <SlideLayout variant="white" id="slide-2">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            Policy analysis in Canada today
          </h2>
          <div className="w-32 accent-bar mt-5" />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          {problems.map((p) => (
            <div key={p.title} className="content-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="icon-circle">
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${p.tagColor}`}
                >
                  {p.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-pe-dark mb-3">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-red-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-gray-500 italic mt-6">
          Policy analysis is too slow, too costly, and too opaque for the pace
          of Canadian governance.
        </p>
      </div>
    </SlideLayout>
  );
}
