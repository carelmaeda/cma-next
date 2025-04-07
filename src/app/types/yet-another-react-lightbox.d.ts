]import 'yet-another-react-lightbox';

declare module 'yet-another-react-lightbox' {
  interface LightboxProps {
    carousel?: {
      finite?: boolean;
    };
  }
}