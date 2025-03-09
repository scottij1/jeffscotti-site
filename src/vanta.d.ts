// Type definitions for Vanta.js
declare namespace VANTA {
  interface VantaBaseOptions {
    el: HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    THREE?: any; // THREE.js instance
  }

  interface VantaDotsOptions extends VantaBaseOptions {
    color?: number;
    color2?: number;
    backgroundColor?: number;
    size?: number;
    spacing?: number;
    showLines?: boolean;
  }

  function DOTS(options: VantaDotsOptions): {
    destroy: () => void;
  };
}

declare const VANTA: {
  DOTS: (options: VANTA.VantaDotsOptions) => {
    destroy: () => void;
  };
};

// Extend Window interface to include THREE
interface Window {
  THREE: any;
}
