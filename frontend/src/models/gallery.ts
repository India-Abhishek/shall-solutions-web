import type { GalleryItem } from "@/types/gallery";

export class GalleryModel {
  constructor(private readonly gallery: GalleryItem) {}

  get id() {
    return this.gallery.id;
  }

  get image() {
    return this.gallery.image;
  }

  get title() {
    return this.gallery.title;
  }

  get description() {
    return this.gallery.description;
  }

  get category() {
    return this.gallery.category;
  }

  get featured() {
    return this.gallery.featured;
  }

  get active() {
    return this.gallery.active;
  }

  get displayOrder() {
    return this.gallery.displayOrder;
  }
}