'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ImgLightboxProps extends Omit<ImageProps, 'src'> {
  src: string | string[];
  alt: string;
  width: number;
  height: number;
  lightboxDisabled?: boolean;
  className?: string;
}

export default function ImageZoom({
  src,
  alt,
  width,
  height,
  lightboxDisabled = false,
  className,
  ...props
}: ImgLightboxProps) {
  const [open, setOpen] = useState(false);
  
  const slides: Slide[] = Array.isArray(src) 
    ? src.map(s => ({ src: s })) 
    : [{ src }];

  // Calculate aspect ratio
  const aspectRatio = width / height;

  // Lightbox styles with proper TypeScript typing
  const lightboxStyles = {
    container: { 
      backgroundColor: 'rgba(255, 255, 255, 0.9)' // White 80% opacity background
    },
    slide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      img: {
        objectFit: 'contain' as const,
        width: 'auto',
        height: 'auto',
        maxWidth: `min(90vw, ${width}px)`, // Responsive max width
        maxHeight: `min(90vh, ${height}px)`, // Responsive max height
      }
    }
  };

  return (
    <div 
      className={className} 
      style={{ 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Image
        src={Array.isArray(src) ? src[0] : src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => !lightboxDisabled && setOpen(true)}
        style={{ 
          cursor: lightboxDisabled ? 'default' : 'pointer',
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          ...props.style 
        }}
        {...props}
      />
      
      {!lightboxDisabled && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          carousel={{ finite: true }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
            iconClose: () => (
              <div style={{
                position: 'absolute',
                color:'#1d1d1d',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: '50%',
                zIndex: 9999
              }}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            )
          }}
          styles={lightboxStyles}
          controller={{ closeOnBackdropClick: true }}
          animation={{ fade: 250, swipe: 0 }}
        />
      )}
    </div>
  );
}