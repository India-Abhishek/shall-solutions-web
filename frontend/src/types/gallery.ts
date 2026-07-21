export interface GalleryItem {
  id: number;

  displayOrder: number;

  slug: string;

  title: {
    en: string;
    hi: string;
  };

  description: {
    en: string;
    hi: string;
  };

  category: {
    en: string;
    hi: string;
  };

  image: string;

  featured: boolean;

  active: boolean;
}