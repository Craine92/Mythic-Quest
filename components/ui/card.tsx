import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  badge?: string;
  children?: ReactNode;
};

export function Card({ title, description, badge, children }: CardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-[#39B6FF]/20 bg-[linear-gradient(180deg,rgba(11,16,32,0.92),rgba(7,10,18,0.95))] p-6 shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition duration-300 hover:border-[#39B6FF]/45 hover:shadow-[0_12px_36px_rgba(16,130,255,0.28)]">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#39B6FF,transparent)] opacity-65" />
      {badge ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6A64A]">
          {badge}
        </p>
      ) : null}
      <h3 className="font-title text-xl text-[#EAF0FF]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#AAB4D6]">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}
