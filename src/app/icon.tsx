import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/**
 * Favicon: "CM" monogram in the site's display serif, ink on the white
 * paper tile with a hairline edge — the site's own surface language.
 *
 * Unlike the OG cards (where Georgia stands in), this genuinely uses
 * Newsreader: the TTF is fetched from Google Fonts at build time and
 * embedded by satori. Fetching the CSS without a browser User-Agent makes
 * Google return truetype URLs — satori can't parse woff2. `text=CM` limits
 * the subset to the two glyphs we render.
 */
async function newsreader() {
  const css = await fetch(
    'https://fonts.googleapis.com/css2?family=Newsreader:wght@500&text=CM',
  ).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
  if (!url) throw new Error('Newsreader TTF URL not found in Google Fonts CSS response');
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF', // white paper (variables.css --color-white)
          border: '1px solid #E8E8E8', // hairline, defines the tile on white UI
          borderRadius: 8,
          color: '#040404', // ink

          fontFamily: 'Newsreader',
          fontSize: 17,
          fontWeight: 500,
          letterSpacing: '-0.015em', // --tracking-heading
        }}
      >
        CM
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Newsreader', data: await newsreader(), weight: 500, style: 'normal' }],
    },
  );
}
