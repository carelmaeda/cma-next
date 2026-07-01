interface SystemsCalloutProps {
  heading?: string
  children: React.ReactNode
  className?: string
}

export default function SystemsCallout({
  heading = 'Systems Thinking',
  children,
  className = '',
}: SystemsCalloutProps) {
  return (
    <div className={`systems-callout ${className}`.trim()}>
      <p className="callout__heading">{heading}</p>
      <div className="callout__body">{children}</div>
    </div>
  )
}
