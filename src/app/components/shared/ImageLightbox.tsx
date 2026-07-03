'use client';

import { useState, type ReactNode } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

/** Click-to-open lightbox for a single image. The children become the
 *  trigger (a pill label, an inline image…); the full-resolution asset
 *  opens in an overlay the viewer can zoom and pan. `width`/`height`
 *  are the source pixels so the Zoom plugin knows its ceiling. */
export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  className,
  children,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src, alt, width, height }]}
        plugins={[Zoom]}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: true }}
        zoom={{ maxZoomPixelRatio: 3 }}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
      />
    </>
  );
}
