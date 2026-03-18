export default function S01_Title() {
  return (
    <section
      id="slide-1"
      className="relative w-screen h-screen flex flex-col gradient-bg text-white justify-center items-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl px-20 flex flex-col justify-center items-center">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              PolicyEngine for the
              <br />
              Government of Canada
            </h1>
            <div className="w-32 accent-bar mx-auto" />
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Open-source microsimulation for tax &amp; benefit policy analysis
              — instant, transparent, and comprehensive.
            </p>
          </div>

          {/* Speaker cards */}
          <div className="flex items-center justify-center gap-12 mt-16">
            <div className="flex items-center gap-4">
              <img
                src={`${import.meta.env.BASE_URL}images/max-ghenis.webp`}
                alt="Max Ghenis"
                className="w-20 h-20 rounded-full border-2 border-white/40 object-cover"
              />
              <div>
                <p className="font-semibold text-lg">Max Ghenis</p>
                <p className="text-white/60 text-sm">CEO, PolicyEngine</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={`${import.meta.env.BASE_URL}images/pavel-makarchuk.webp`}
                alt="Pavel Makarchuk"
                className="w-20 h-20 rounded-full border-2 border-white/40 object-cover"
              />
              <div>
                <p className="font-semibold text-lg">Pavel Makarchuk</p>
                <p className="text-white/60 text-sm">
                  Chief of Staff, PolicyEngine
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-black/20 backdrop-blur-sm flex items-center justify-between px-16 z-10">
        <img
          src={`${import.meta.env.BASE_URL}logos/pe-white.svg`}
          alt="PolicyEngine"
          className="h-7 opacity-90"
        />
        <span className="text-white/80 text-sm font-medium">
          Government of Canada &middot; March 2026
        </span>
      </div>
    </section>
  );
}
