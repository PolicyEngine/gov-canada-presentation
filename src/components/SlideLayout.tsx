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

  return (
    <section
      id={id}
      className={`relative w-screen h-screen flex flex-col ${bgClass} ${className}`}
    >
      <div className="absolute inset-0 pt-24 pb-12">
        <div className="w-full h-full px-16">{children}</div>
      </div>
    </section>
  );
}
