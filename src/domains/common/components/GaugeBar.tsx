import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface IGaugeBar {
  classes?: {
    bar?: string;
    gauge?: string;
  };
  currentValue: number;
  totalValue: number;
}

export default function GaugeBar({
  classes,
  currentValue,
  totalValue,
}: IGaugeBar) {
  const ratio = Math.min((currentValue / totalValue) * 100, 100);
  return (
    <div
      className={twMerge(
        clsx(
          "flex h-[8px] overflow-hidden rounded-full border border-gray-200",
          classes?.bar,
        ),
      )}
    >
      <div
        style={{ width: `${ratio}%` }}
        className={twMerge(
          clsx(
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-[width]",
            classes?.gauge,
          ),
        )}
      ></div>
    </div>
  );
}
