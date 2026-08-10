/*
|--------------------------------------------------------------------------
| Service Model
|--------------------------------------------------------------------------
| Business model used throughout the application.
| UI components should depend on this model.
|--------------------------------------------------------------------------
*/

import type { Service } from "@/types/service";

export class ServiceModel {
  constructor(private readonly service: Service) {}

  get id() {
    return this.service.id;
  }

  get slug() {
    return this.service.slug;
  }

  get title() {
    return this.service.title;
  }

  get description() {
    return this.service.description;
  }

  get icon() {
    return this.service.icon;
  }

  get image() {
    return this.service.image;
  }

  get active() {
    return this.service.active;
  }

  get displayOrder() {
    return this.service.displayOrder;
  }
}