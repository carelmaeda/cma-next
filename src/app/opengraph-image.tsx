import { ImageResponse } from 'next/og';
import { ogTemplate, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Carel Maeda — Product Design Manager';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return new ImageResponse(
    ogTemplate({
      title: 'Product Design Manager who ships strategy, design, and code.',
      subtitle: 'Six years at Paygos · ~10–15% YoY revenue impact · Ready for Design Lead',
    }),
    { width: ogSize.width, height: ogSize.height },
  );
}
