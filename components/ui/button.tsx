import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(120deg,#1f7cff,#39b6ff)] text-[#EAF0FF] shadow-[0_0_24px_rgba(57,182,255,0.45)] hover:brightness-110 focus-visible:ring-[#39b6ff]",
  secondary:
    "border border-[#D6A64A]/70 bg-[#0B1020]/60 text-[#F2C46D] hover:bg-[#D6A64A]/10 focus-visible:ring-[#D6A64A]",
  ghost:
    "border border-[#39B6FF]/35 bg-[#0B1020]/55 text-[#EAF0FF] hover:border-[#39B6FF]/60 hover:bg-[#39B6FF]/10 focus-visible:ring-[#39B6FF]",
};

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = BaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

type NativeButtonProps = BaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: never;
  };

function isLinkProps(props: LinkButtonProps | NativeButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  if (isLinkProps(props)) {
    const { variant = "primary", className = "", children, href, ...rest } = props;
    const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12] ${variantClasses[variant]} ${className}`.trim();

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12] ${variantClasses[variant]} ${className}`.trim();

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
