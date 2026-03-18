import type { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  variant?: "gradient" | "white" | "warm";
  id?: string;
}

export default function SlideLayout({
  children,
  className = "",
  variant = "white",
  id,
}: SlideLayoutProps) {
  const bgClass = {
    gradient: "gradient-bg text-white",
    white: "bg-white",
    warm: "bg-[#f9f8f6]",
  }[variant];

  const isLight = variant === "white" || variant === "warm";

  return (
    <section
      id={id}
      className={`relative w-screen h-screen flex flex-col ${bgClass} ${className}`}
    >
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 h-14 gradient-bg flex items-center justify-between px-16 z-10">
        <img
          src={`${import.meta.env.BASE_URL}logos/pe-white.svg`}
          alt="PolicyEngine"
          className="h-7 opacity-90"
        />
        <span className="text-white/80 text-sm font-medium">
          Government of Canada &middot; March 2026
        </span>
      </div>

      <div className="absolute inset-0 pt-20 pb-12">
        <div className="w-full h-full px-16">{children}</div>
      </div>
    </section>
  );
}
