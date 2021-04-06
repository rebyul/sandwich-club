// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment: Environment = {
  production: false,
  apiUri: 'https://localhost:3333',
};

export type Environment = {
  production: boolean;
  apiUri: string;
};
