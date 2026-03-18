import SlideLayout from "../components/SlideLayout";

export default function S08_WebInterface() {
  return (
    <SlideLayout variant="white" id="slide-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
            policyengine.org
          </h2>
          <div className="w-32 accent-bar mt-5" />
        </div>

        <div className="grid grid-cols-2 gap-8 mt-2">
          <div>
            <div className="content-card overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}screenshots/pe-winners-losers.png`}
                alt="PolicyEngine winners and losers analysis"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Winners and losers by income decile
            </p>
          </div>

          <div>
            <div className="content-card overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}screenshots/pe-obbba-scatter.png`}
                alt="PolicyEngine household-by-household scatter plot"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Household-by-household impact of the One Big Beautiful Bill Act
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
