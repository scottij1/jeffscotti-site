/// <reference types="astro/client" />

// Image files
declare module "*.png" {
  const src: string;
  export default { src };
}

// PDF files
declare module "*.pdf" {
  const src: string;
  export default src;
}

// DOCX files
declare module "*.docx" {
  const content: string;
  export default content;
}

// DOCX files with URL query
declare module "*.docx?url" {
  const content: string;
  export default content;
}
