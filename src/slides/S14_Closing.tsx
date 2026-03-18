export default function S14_Closing() {
  return (
    <section
      id="slide-14"
      className="relative w-screen h-screen flex flex-col gradient-bg text-white justify-center items-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl px-20 text-center space-y-8">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Thank you
          </h2>
          <p className="text-2xl text-white/70 font-light">
            Let's make policy analysis accessible
            <br />
            for all Canadians.
          </p>
          <div className="w-32 accent-bar mx-auto" />

          <div className="flex justify-center gap-8 mt-8">
            {[
              { label: "Web", value: "policyengine.org" },
              { label: "GitHub", value: "github.com/PolicyEngine" },
              { label: "Contact", value: "hello@policyengine.org" },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-white/5 border border-white/10 rounded-xl px-8 py-5 text-center backdrop-blur-sm"
              >
                <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                  {c.label}
                </p>
                <p className="text-white font-medium">{c.value}</p>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-sm mt-8">
            Open-source &middot; Transparent &middot; Non-partisan
          </p>
        </div>
      </div>
    </section>
  );
}
