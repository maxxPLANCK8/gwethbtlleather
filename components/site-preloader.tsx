"use client";

import { useEffect, useState } from "react";
import ClassicLoader from "@/components/ui/loader";

export function SitePreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading GWETHBTL Leather"
    >
      <div className="grid justify-items-center gap-5">
        <ClassicLoader />
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-leather">
          GWETHBTL Leather
        </p>
      </div>
    </div>
  );
}
