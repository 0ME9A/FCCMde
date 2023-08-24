import Link from "next/link";
import React from "react";

const primaryLinkStyle =
  "px-5 py-2 border-2 rounded-xl font-light bg-slate-900 border-transparent hover:border-slate-800 shadow-2xl shadow-slate-500/70";

type primaryLinkType = {
  target?: "_blank" | "_self";
  children: React.ReactNode;
  href: string;
  title: string;
  styles?: string;
};
function PrimaryLink({
  target = "_blank",
  children,
  title,
  href,
  styles,
}: primaryLinkType) {
  return (
    <Link
      href={href}
      title={title}
      target={target === "_blank" ? "_blank" : "_self"}
      className={`${primaryLinkStyle} ${styles}`}
    >
      {children}
    </Link>
  );
}

export default PrimaryLink;
export { primaryLinkStyle };
