"use client";

import React, { useState } from "react";

import theContext from "@/context/store";
import Nav from "@/components/Nav";

function ChildLayout({ children }: { children: React.ReactNode }) {
  const [startEdit, setStartEdit] = useState<boolean>(false);

  return (
    <theContext.Provider value={{ startEdit, setStartEdit }}>
      {children}
    </theContext.Provider>
  );
}

export default ChildLayout;
