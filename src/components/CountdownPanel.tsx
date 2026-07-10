import { Clock3 } from "lucide-react";

export function CountdownPanel() {
  return (
    <div className="flex items-center gap-3 border border-warningOrange/40 bg-warningOrange/10 px-4 py-3 text-warningOrange">
      <Clock3 size={18} />
      <span className="font-heading text-xs font-bold uppercase tracking-[0.2em]">
        Next Transmission: T-00:00:00
      </span>
    </div>
  );
}
