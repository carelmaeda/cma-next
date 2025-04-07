import 'yet-another-react-lightbox';

declare module 'yet-another-react-lightbox' {
  interface LightboxProps {
    carousel?: {
      finite?: boolean;
    };
    styles?: {
      container?: React.CSSProperties;
      slide?: {
        img?: React.CSSProperties;
      } & React.CSSProperties;
    };
  }
}