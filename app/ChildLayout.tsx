"use client";

import React, { useState } from "react";

import theContext from "@/context/store";

function ChildLayout({ children }: { children: React.ReactNode }) {
  const [startEdit, setStartEdit] = useState<boolean>(false);

  return (
    <theContext.Provider value={{ startEdit, setStartEdit }}>
      {children}
    </theContext.Provider>
  );
}

export default ChildLayout;
