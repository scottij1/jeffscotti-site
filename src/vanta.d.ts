// Declaration for the global VANTA object loaded from CDN
interface VantaEffect {
  destroy: () => void;
}

interface VantaDotsOptions {
  el: HTMLElement | string;
  color?: number;
  backgroundColor?: number;
  size?: number;
  spacing?: number;
  showLines?: boolean;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
}

interface VantaNetOptions {
  el: HTMLElement | string;
  color?: number;
  backgroundColor?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
}

interface VantaGlobal {
  DOTS: (options: VantaDotsOptions) => VantaEffect;
  NET: (options: VantaNetOptions) => VantaEffect;
}

declare const VANTA: VantaGlobal;
