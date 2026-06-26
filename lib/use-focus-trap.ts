"use client";

import { RefObject, useEffect } from "react";

const selector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function useFocusTrap<T extends HTMLElement>(
  ref: RefObject<T | null>,
  active: boolean,
  onEscape?: () => void
) {
  useEffect(() => {
    if (!active || !ref.current) {
      return;
    }

    const node = ref.current;
    const previous = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const focusable = Array.from(
      node.querySelectorAll<HTMLElement>(selector)
    ).filter((element) => !element.hasAttribute("disabled"));

    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscape?.();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [active, onEscape, ref]);
}
