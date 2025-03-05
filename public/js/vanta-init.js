import * as THREE from "three";
import VANTA from "vanta/dist/vanta.net.min";

window.addEventListener("load", () => {
  const element = document.querySelector("#vanta-bg");
  if (!element) {
    console.error("Background element not found");
    return;
  }

  try {
    VANTA({
      el: element,
      THREE: THREE,
      color: 0x0077ff,
      backgroundColor: 0x000000,
      points: 10,
      maxDistance: 20,
      spacing: 15,
    });
    console.log("VANTA initialized successfully");
  } catch (error) {
    console.error("Error initializing VANTA:", error);
  }
});
