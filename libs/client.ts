import { createClient } from 'microcms-js-sdk';
import { ClientParams } from 'microcms-js-sdk/dist/cjs/types';

export const client = createClient({
  serviceDomain: 'taku1219',
  apiKey: process.env.API_KEY ?? '',
});

export const key = {
  headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY ?? '' },
};
