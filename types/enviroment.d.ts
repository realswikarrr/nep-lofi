export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
      NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string;
      NEXT_PUBLIC_JWT_SECRET: string;
      NEXT_PUBLIC_AUTH_URL: string;
    }
  }
}
