interface ImportMetaEnv {
    VITE_APP_API_URL: string;
    VITE_APP_API_KEY: string;
  }
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";