import SlideLayout from "../components/SlideLayout";

export default function S11_Encoding() {
  return (
    <SlideLayout variant="white" id="slide-11">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            Translating documents into code
          </h2>
          <div className="w-32 accent-bar mt-5" />
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            We translate statutory language into machine-readable rules —
            enabling instant, reproducible analysis.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-2">
          {/* Statutory text */}
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle">
                <span className="text-[#319795] font-bold text-lg">§</span>
              </div>
              <h3 className="font-bold text-pe-dark">
                Income Tax Act — Section 122.61(1)
              </h3>
            </div>
            <div className="bg-[#f9f8f6] rounded-lg p-5 text-sm text-gray-700 leading-relaxed font-mono">
              <p>
                "... the product obtained by multiplying <strong className="text-[#319795]">$6,400</strong> by
                the number of qualified dependants ... who have <strong>not
                reached the age of six</strong> years ...
              </p>
              <p className="mt-3">
                and the product obtained by multiplying <strong className="text-[#319795]">$5,400</strong> by
                the number of qualified dependants ... referred to in
                paragraph (b)"
              </p>
              <p className="mt-3 text-xs text-gray-400">
                Indexed annually — $7,997 / $6,748 for July 2025–June 2026
              </p>
            </div>
          </div>

          {/* Encoded rule */}
          <div className="content-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle">
                <span className="text-[#319795] font-bold text-lg">{`</>`}</span>
              </div>
              <h3 className="font-bold text-pe-dark">PolicyEngine encoding</h3>
            </div>
            <div className="code-block">
              <div className="code-block-header">
                <div className="code-block-dot bg-red-500" />
                <div className="code-block-dot bg-yellow-500" />
                <div className="code-block-dot bg-green-500" />
                <span className="text-white/50 text-xs ml-2 font-mono">
                  child_benefit_base_person.py
                </span>
              </div>
              <div className="code-block-content text-sm">
                <p>
                  <span className="text-purple-300">class</span>{" "}
                  <span className="text-blue-300">child_benefit_base_person</span>
                  (Variable):
                </p>
                <p className="text-gray-500 mt-1">
                  &nbsp; <span className="text-purple-300">def</span>{" "}
                  <span className="text-blue-300">formula</span>
                  (person, period, parameters):
                </p>
                <p className="mt-1">
                  &nbsp;&nbsp;&nbsp; age = person(
                  <span className="text-green-400">"age"</span>, period)
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp; p = parameters(period)
                  <span className="text-yellow-300">.gov.cra.benefits.ccb</span>
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp; full_custody = person(
                  <span className="text-green-400">"full_custody"</span>, period)
                </p>
                <p className="mt-1">
                  &nbsp;&nbsp;&nbsp;{" "}
                  <span className="text-purple-300">return</span> where(
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; full_custody,
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; p.base.calc(age),
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; p.base.calc(age) / p.divisor)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
