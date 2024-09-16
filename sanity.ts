import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'oe8urrcu',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-10-15',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export default client;
