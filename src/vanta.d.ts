declare module "vanta/dist/vanta.net.min" {
    import * as THREE from "three";
  
  interface VantaOptions {
    el: HTMLElement | string;
    THREE?: typeof THREE;
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
  
    interface VantaEffect {
      destroy: () => void;
    }
  
    function VANTA_NET(options: VantaOptions): VantaEffect;
  
    export default VANTA_NET;
  }
