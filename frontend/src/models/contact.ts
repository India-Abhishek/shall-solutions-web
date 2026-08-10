export class ContactModel {
  name = "";

  phone = "";

  email = "";

  subject = "";

  message = "";

  constructor(data?: Partial<ContactModel>) {
    Object.assign(this, data);
  }
}