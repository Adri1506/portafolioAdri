interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="rounded-xl bg-card p-6 text-center border border-border">
      <div className="text-3xl font-bold font-display text-primary">
        {number}
      </div>
      <div className="text-sm text-muted-foreground mt-1 font-mono">{label}</div>
    </div>
  );
}
