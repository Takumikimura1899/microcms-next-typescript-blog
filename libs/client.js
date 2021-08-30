import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'taku1219',
  apiKey: process.env.API_KEY,
});
