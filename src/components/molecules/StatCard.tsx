interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
      <div className="text-3xl font-bold font-display text-blue-600">
        {number}
      </div>
      <div className="text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
}
