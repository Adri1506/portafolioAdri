const steps = [
  { emoji: "📋", label: "Spec" },
  { emoji: "📝", label: "Plan" },
  { emoji: "✅", label: "Tasks" },
  { emoji: "💻", label: "Implement" },
  { emoji: "🔍", label: "Verify" },
];

export default function SDDCycle() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-4">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-lg text-sm font-medium text-navy-800">
            <span>{step.emoji}</span>
            <span className="font-mono text-xs">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <span className="text-slate-300 text-lg hidden sm:inline">→</span>
          )}
        </div>
      ))}
    </div>
  );
}
