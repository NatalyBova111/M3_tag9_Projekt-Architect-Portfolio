export type Photo = { id: string; src: string; alt: string };

const files = import.meta.glob<string>(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default", query: "?url" }
);

export const photos: Photo[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))          // стабильный порядок
  .map(([, url], i) => ({
    id: String(i + 1),
    src: url,
    alt: `Photo ${i + 1}`,
  }));


  