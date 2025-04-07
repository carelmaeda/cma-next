'use client';

import { useState, useEffect, useCallback } from 'react';
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

  // Handle close with proper dependency
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Handle click outside with proper dependencies
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  // Lightbox styles with proper TypeScript typing
  const lightboxStyles = {
    container: { 
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    slide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      img: {
        objectFit: 'contain' as const,
        width: 'auto',
        height: 'auto',
        maxWidth: `min(90vw, ${width}px)`,
        maxHeight: `min(90vh, ${height}px)`,
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
          close={handleClose}
          slides={slides}
          carousel={{ finite: true }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
            iconClose: () => (
              <button
                type="button"
                aria-label="Close"
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 9999,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  padding: 0
                }}
              >
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
              </button>
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