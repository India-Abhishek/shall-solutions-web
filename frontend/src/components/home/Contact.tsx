"use client";

/*
|--------------------------------------------------------------------------
| Contact Section
|--------------------------------------------------------------------------
| Purpose:
| Displays company contact information and a contact form.
|
| NOTE:
| Today -> UI only
| Future -> POST /api/contact
| Future -> Admin Dashboard
| Future -> CRM / Ecommerce Customer Inquiry
|--------------------------------------------------------------------------
*/

import { useState } from "react";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { COMPANY } from "@/config/company";

export default function Contact() {
  const [loading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log(formData);

    alert(
      "Backend integration will be added in the next phase."
    );
  }

  return (
    <Section id="contact">

      <SectionTitle
        title="Contact Us"
        subtitle="Have a question? We'd love to hear from you."
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">


        {/* LEFT COLUMN */}

        <div className="space-y-5">

          <Card>

            <div className="flex gap-4">

              <Phone className="text-[#0D1B4A]" />

              <div>

                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-slate-600 mt-1">
                  {COMPANY.phone}
                </p>

              </div>

            </div>

          </Card>

          <Card>

            <div className="flex gap-4">

              <MessageCircle className="text-green-600" />

              <div>

                <h3 className="font-semibold">
                  WhatsApp
                </h3>

                <p className="text-slate-600 mt-1">
                  +91 {COMPANY.whatsapp}
                </p>

              </div>

            </div>

          </Card>

          <Card>

            <div className="flex gap-4">

              <Mail className="text-[#0D1B4A]" />

              <div>

                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-slate-600 mt-1 break-all">
                  {COMPANY.email}
                </p>

              </div>

            </div>

          </Card>

          <Card>

            <div className="flex gap-4">

              <MapPin className="text-[#0D1B4A]" />

              <div>

                <h3 className="font-semibold">
                  Address
                </h3>

                <p className="text-slate-600 mt-1">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                  <br />
                  {COMPANY.address.city},{" "}
                  {COMPANY.address.state}
                </p>

              </div>

            </div>

          </Card>

          <Card>

            <div className="flex gap-4">

              <Clock className="text-[#0D1B4A]" />

              <div>

                <h3 className="font-semibold">
                  Business Hours
                </h3>

                <p className="text-slate-600 mt-1">
                  {COMPANY.timings}
                </p>

              </div>

            </div>

          </Card>

        </div>

        {/* RIGHT COLUMN */}

        <Card>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              className="w-full rounded-lg border p-3"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="w-full rounded-lg border p-3"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              className="w-full rounded-lg border p-3"
              name="email"
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className="w-full rounded-lg border p-3"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              className="w-full rounded-lg border p-3 resize-none"
              rows={6}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Button
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

          </form>

        </Card>

        <Card className="overflow-hidden p-0">
            <iframe
                title="SHALL SOLUTIONS Location"
                src={COMPANY.mapEmbedUrl}
                className="h-[350px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
        </Card>

        </div>
      </div>

    </Section>
  );
}