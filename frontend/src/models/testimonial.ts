import type { Testimonial } from "@/types/testimonial";

export class TestimonialModel {
  constructor(
    private readonly testimonial: Testimonial
  ) {}

  get id() {
    return this.testimonial.id;
  }

  get name() {
    return this.testimonial.name;
  }

  get rating() {
    return this.testimonial.rating;
  }

  get message() {
    return this.testimonial.message;
  }

  get active() {
    return this.testimonial.active;
  }

  get displayOrder() {
    return this.testimonial.displayOrder;
  }
}