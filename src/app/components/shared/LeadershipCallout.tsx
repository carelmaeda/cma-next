interface LeadershipCalloutProps {
  heading?: string
  children: React.ReactNode
  className?: string
}

export default function LeadershipCallout({
  heading = 'Leadership & Collaboration',
  children,
  className = '',
}: LeadershipCalloutProps) {
  return (
    <div className={`leadership-callout ${className}`.trim()}>
      <p className="callout__heading">{heading}</p>
      <div className="callout__body">{children}</div>
    </div>
  )
}
