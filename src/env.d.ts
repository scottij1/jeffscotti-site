/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SMTP_USER: string;
  readonly SMTP_PASS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.docx" {
  const content: string;
  export default content;
}
