"use client";

import { Minus, Plus } from "lucide-react";

type QuantityStepperProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
  buttonClassName?: string;
};

export function QuantityStepper({
  value,
  min = 1,
  max = 10,
  onChange,
  className = "",
  buttonClassName = ""
}: QuantityStepperProps) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={`flex h-12 w-36 items-center justify-between rounded-full border border-border bg-white px-2 ${className}`}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        className={`grid min-h-9 min-w-9 place-items-center rounded-full text-ink hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40 ${buttonClassName}`}
        disabled={value <= min}
        onClick={decrease}
      >
        <Minus size={16} aria-hidden />
      </button>
      <span className="min-w-8 text-center font-semibold text-ink" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={`grid min-h-9 min-w-9 place-items-center rounded-full text-ink hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40 ${buttonClassName}`}
        disabled={value >= max}
        onClick={increase}
      >
        <Plus size={16} aria-hidden />
      </button>
    </div>
  );
}
