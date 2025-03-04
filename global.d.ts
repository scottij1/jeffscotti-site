export {};

declare global {
  interface Window {
    VANTA: {
      NET: (options: any) => any;
    };
  }
}
