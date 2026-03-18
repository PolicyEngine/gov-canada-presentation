import SlideLayout from "../components/SlideLayout";

const features = [
  { icon: "💬", title: "Natural language", desc: "English or French" },
  { icon: "📊", title: "Distributional", desc: "Impact by decile" },
  { icon: "🗺️", title: "Provincial", desc: "Province & riding" },
  { icon: "👨‍👩‍👧‍👦", title: "Household", desc: "Family calculators" },
  { icon: "📋", title: "1,500+ variables", desc: "Full coverage" },
  { icon: "🤖", title: "No code", desc: "Accessible to all" },
];

export default function S09_AIPlugin() {
  return (
    <SlideLayout variant="white" id="slide-9">
      <div className="space-y-8">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            The Claude plugin
          </h2>
          <div className="w-32 accent-bar mt-5" />
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            PolicyEngine integrates directly with Claude AI — enabling natural
            language policy analysis without writing a single line of code.
          </p>
        </div>

        <div className="content-card p-6 max-w-3xl mx-auto">
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500" />
              <div className="code-block-dot bg-yellow-500" />
              <div className="code-block-dot bg-green-500" />
              <span className="text-white/50 text-xs ml-2 font-mono">
                Terminal
              </span>
            </div>
            <div className="code-block-content text-sm">
              <p className="text-gray-500"># Add the marketplace & install</p>
              <p className="text-green-400">
                /plugin marketplace add PolicyEngine/policyengine-claude
              </p>
              <p className="text-green-400">
                /plugin install complete@policyengine-claude
              </p>
              <p className="text-gray-500 mt-3">
                # Ask a policy question in natural language
              </p>
              <p className="text-green-400">
                $ claude "What would doubling the CCB cost for a family with 2 children in Ontario?"
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="content-card p-5 text-center"
            >
              <span className="text-2xl block mb-2">{f.icon}</span>
              <p className="font-bold text-pe-dark text-sm">{f.title}</p>
              <p className="text-gray-400 text-xs mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
