import { GlassCard } from "@/src/components/GlassCard";

type HUDPanelProps = {
  label: string;
  value: string;
};

export function HUDPanel({ label, value }: HUDPanelProps) {
  return (
    <GlassCard className="p-4">
      <p className="font-heading text-[10px] uppercase tracking-[0.22em] text-whiteSmoke/45">
        {label}
      </p>
      <p className="mt-2 font-heading text-sm font-bold uppercase text-neonGreen">{value}</p>
    </GlassCard>
  );
}
