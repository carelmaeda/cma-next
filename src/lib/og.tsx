export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

export interface OGParams {
  title: string;
  subtitle?: string;
}

/**
 * OG card, matched to the site's editorial monochrome system: white paper,
 * ink text, hairline rules, and the single electric-blue logo dot as accent.
 * Colours are inlined hex mirroring variables.css (next/og can't read CSS
 * vars). Georgia stands in for Newsreader — next/og can't load the site serif
 * without a remote font fetch, and Georgia is the closest globally available
 * substitute that survives in social-share previews.
 */
export function ogTemplate({ title, subtitle }: OGParams) {
  const mono = 'ui-monospace, "JetBrains Mono", "Courier New", monospace';
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF', // white paper
        padding: '64px 80px',
        position: 'relative',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Header row — logo dot + mono eyebrow, domain right, on a hairline */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '28px',
          borderBottom: '1px solid #E8E8E8', // hairline
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: 9999,
              backgroundColor: '#1400FF', // electric blue logo dot
              display: 'flex',
            }}
          />
          <span
            style={{
              color: '#707070', // muted
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontFamily: mono,
            }}
          >
            Carel Maeda · Product Designer
          </span>
        </div>
        <span
          style={{
            color: '#888888', // muted-2, decorative metadata
            fontSize: '18px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: mono,
          }}
        >
          carelmaeda.com
        </span>
      </div>

      {/* Main content, editorial display serif in ink */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          position: 'relative',
          maxWidth: '980px',
        }}
      >
        <div
          style={{
            color: '#040404', // ink
            fontSize: subtitle ? '76px' : '92px',
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: '-0.015em', // --tracking-heading
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              color: '#707070', // muted
              fontSize: '26px',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: 1.4,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Bottom row — ink rule + mono tagline */}
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
            height: '2px',
            backgroundColor: '#040404', // ink
            display: 'flex',
          }}
        />
        <span
          style={{
            color: '#040404', // ink
            fontSize: '18px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: mono,
          }}
        >
          Strategy · Design · Code · Shipped
        </span>
      </div>
    </div>
  );
}
