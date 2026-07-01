export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

export interface OGParams {
  title: string
  subtitle?: string
  /** Optional eyebrow override; defaults to "Carel Maeda · carelmaeda.com" */
  eyebrow?: string
}

/**
 * OG card, cream canvas, aubergine ink, terracotta brand, editorial serif feel.
 * Uses Georgia as the system-available high-contrast serif (next/og can't load
 * Instrument Serif without a remote font fetch; Georgia is the closest globally
 * available substitute that survives in social-share previews).
 */
export function ogTemplate({ title, subtitle, eyebrow }: OGParams) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F5EFE6', // cream
        padding: '64px 80px',
        position: 'relative',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Decorative peach blob, top-right */}
      <div
        style={{
          position: 'absolute',
          top: -180,
          right: -180,
          width: 520,
          height: 520,
          borderRadius: 9999,
          backgroundColor: '#F4B89C', // peach
          opacity: 0.45,
          display: 'flex',
        }}
      />
      {/* Decorative mustard blob, bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: -160,
          left: -140,
          width: 420,
          height: 420,
          borderRadius: 9999,
          backgroundColor: '#D4A24C', // mustard
          opacity: 0.25,
          display: 'flex',
        }}
      />

      {/* Header row, mono eyebrow on coral */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          position: 'relative',
        }}
      >
        <span
          style={{
            color: '#E87461', // coral
            fontSize: '20px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: 'ui-monospace, "JetBrains Mono", "Courier New", monospace',
          }}
        >
          {eyebrow ?? 'Carel Maeda · Senior Product Designer'}
        </span>
        <span
          style={{
            color: '#7A6E63', // warm-grey
            fontSize: '18px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'ui-monospace, "JetBrains Mono", "Courier New", monospace',
          }}
        >
          carelmaeda.com
        </span>
      </div>

      {/* Main content, editorial display serif on aubergine */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          position: 'relative',
          maxWidth: '960px',
        }}
      >
        <div
          style={{
            color: '#3A2218', // aubergine
            fontSize: subtitle ? '76px' : '92px',
            fontWeight: 400,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              color: '#7A6E63', // warm-grey
              fontSize: '26px',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: 1.4,
              fontFamily: 'system-ui, -apple-system, "Inter Tight", sans-serif',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Bottom row, terracotta accent rule + mono tagline */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '3px',
            backgroundColor: '#C66B3D', // terracotta
            borderRadius: '2px',
            display: 'flex',
          }}
        />
        <span
          style={{
            color: '#2C2826', // charcoal
            fontSize: '18px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'ui-monospace, "JetBrains Mono", "Courier New", monospace',
          }}
        >
          Strategy · Design · Code · shipped
        </span>
      </div>
    </div>
  )
}
