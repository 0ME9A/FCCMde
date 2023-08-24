import { socialLink } from "@/data/social";

import PrimaryLink from "./Link";
import React from "react";

function Footer() {
  return (
    <footer className={`w-full text-center space-y-2 pt-32 `}>
      <ul className="flex items-center justify-center text-2xl gap-1 p-5">
        {socialLink.map((item) => (
          <li key={item.title} className="opacity-50 hover:opacity-100">
            <PrimaryLink
              href={item.url}
              title={item.title}
              styles="inline-block bg-transparent !p-2 shadow-lg shadow-slate-500/10 rounded-full "
            >
              {item.icon}
            </PrimaryLink>
          </li>
        ))}
      </ul>

      <p className="py-2 text-xs sm:text-base">
        Designed and developed by <strong>Baliram Singh</strong> (OMEGA)
      </p>
    </footer>
  );
}

export default Footer;
