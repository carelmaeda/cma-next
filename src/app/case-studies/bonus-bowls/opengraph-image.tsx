import { ImageResponse } from 'next/og';
import { ogTemplate, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Bonus Bowls: A cashback loyalty platform for a Fortune 500 pet-nutrition brand';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return new ImageResponse(
    ogTemplate({
      title: 'A cashback loyalty platform, designed from primary user research.',
      subtitle: 'Case Study · Strategy & Impact',
    }),
    { width: ogSize.width, height: ogSize.height },
  );
}
