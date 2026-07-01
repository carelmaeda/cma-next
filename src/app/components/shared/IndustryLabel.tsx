interface IndustryLabelProps {
  label: string
  className?: string
}

export default function IndustryLabel({ label, className = '' }: IndustryLabelProps) {
  return (
    <span className={`industry-label ${className}`.trim()}>{label}</span>
  )
}
