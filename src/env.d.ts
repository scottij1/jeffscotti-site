/// <reference types="astro/client" />

declare module "*.docx" {
  const content: string;
  export default content;
}
