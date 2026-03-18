import SlideLayout from "../components/SlideLayout";

const sections = [
  { number: "01", title: "PolicyEngine overview", description: "The platform, who uses it, how microsimulation works" },
  { number: "02", title: "Policy to code", description: "Translating statutes to code, multi-agent workflow, Axiom Foundation" },
  { number: "03", title: "PolicyEngine Canada", description: "Coverage today, live demo" },
  { number: "04", title: "Claude plugin & next steps", description: "AI-powered analysis, what you can ask" },
];

export default function S02_Agenda() {
  return (
    <SlideLayout variant="white" id="slide-2">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            Agenda
          </h2>
          <div className="w-32 accent-bar mt-5" />
        </div>

        <div className="flex flex-col gap-5 mt-6 max-w-3xl">
          {sections.map((section, i) => (
            <div key={i} className="flex items-baseline gap-6">
              <span className="font-mono text-3xl font-bold text-[var(--accent)] opacity-40">
                {section.number}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h3>
                <p className="text-gray-500 text-lg mt-1">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
