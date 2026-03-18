import { useEffect, useState, useCallback, type ReactNode } from "react";
import S01_Title from "./slides/S01_Title";
import S02_Agenda from "./slides/S02_Agenda";
import S04_HowItWorks from "./slides/S04_HowItWorks";
import S04b_ApplyRules from "./slides/S04b_ApplyRules";
import S04c_BaselineReform from "./slides/S04c_BaselineReform";
import S04d_Dynamics from "./slides/S04d_Dynamics";
import S04e_Aggregate from "./slides/S04e_Aggregate";
import S05_Platform from "./slides/S05_Platform";
import S07_TrackRecord from "./slides/S07_TrackRecord";
import S08_WebInterface from "./slides/S08_WebInterface";
import S09_AIPlugin from "./slides/S09_AIPlugin";
import S10_Capabilities from "./slides/S10_Capabilities";
import S11_Encoding from "./slides/S11_Encoding";
import S11b_AgentWorkflow from "./slides/S11b_AgentWorkflow";
import S12b_LookingAhead from "./slides/S12b_LookingAhead";
import S13_Demo from "./slides/S13_Demo";
import S14_Closing from "./slides/S14_Closing";

const slides: ReactNode[] = [
  <S01_Title />,
  <S02_Agenda />,
  <S08_WebInterface />,
  <S07_TrackRecord />,
  <S04_HowItWorks />,
  <S04b_ApplyRules />,
  <S04c_BaselineReform />,
  <S04d_Dynamics />,
  <S04e_Aggregate />,
  <S11_Encoding />,
  <S11b_AgentWorkflow />,
  <S12b_LookingAhead />,
<S05_Platform />,
  <S13_Demo />,
  <S09_AIPlugin />,
  <S10_Capabilities />,
<S14_Closing />,
];

const TOTAL = slides.length;

function App() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating) return;
      const next = current + dir;
      if (next < 0 || next >= TOTAL) return;
      setIsAnimating(true);
      setCurrent(next);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [current, isAnimating],
  );

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [current, isAnimating],
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === " " ||
        e.key === "PageDown"
      ) {
        e.preventDefault();
        go(1);
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Click to advance (left third = back, right two-thirds = forward)
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      // Don't navigate if clicking interactive elements
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "BUTTON" || tag === "A" || tag === "INPUT") return;

      const x = e.clientX / window.innerWidth;
      go(x < 0.33 ? -1 : 1);
    },
    [go],
  );

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onClick={onClick}
    >
      {/* Slide container */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-400 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? "auto" : "none",
            zIndex: i === current ? 1 : 0,
          }}
        >
          {slide}
        </div>
      ))}

      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer border-0 ${
              i === current
                ? "bg-pe-teal scale-[1.4]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              goTo(i);
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black/40 backdrop-blur-sm text-white/60 text-xs px-4 py-1.5 rounded-full pointer-events-none">
        {current + 1} / {TOTAL}
      </div>
    </div>
  );
}

export default App;
