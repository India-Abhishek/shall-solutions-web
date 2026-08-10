import type { FAQ } from "@/types/faq";

export class FAQModel {
  constructor(private readonly faq: FAQ) {}

  get id() {
    return this.faq.id;
  }

  get question() {
    return this.faq.question;
  }

  get answer() {
    return this.faq.answer;
  }

  get active() {
    return this.faq.active;
  }

  get displayOrder() {
    return this.faq.displayOrder;
  }
}