interface MetricDisplayProps {
  value: string
  label: string
  context?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'numeric' | 'text'
}

export default function MetricDisplay({
  value,
  label,
  context,
  size = 'md',
  variant = 'numeric',
}: MetricDisplayProps) {
  return (
    <div className={`metric-display metric-display--${size} metric-display--${variant}`}>
      <span className="metric-display__value">{value}</span>
      <span className="metric-display__label">{label}</span>
      {context && <span className="metric-display__context">{context}</span>}
    </div>
  )
}
