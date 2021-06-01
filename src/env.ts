export enum Env {
  LOCALHOST = 'development',
  DEV = 'preview',
  PROD = 'production',
}

export const getEnv = (): Env => (process.env.VERCEL_ENV as Env) || Env.DEV;

export const isProduction = (): boolean => getEnv() === Env.PROD;
