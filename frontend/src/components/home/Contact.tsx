"use client";

/*
|--------------------------------------------------------------------------
| Contact Section
|--------------------------------------------------------------------------
| Purpose:
| Public contact section.
|
| Future:
| - POST /api/contact
| - Email Notifications
| - Admin Dashboard
| - CRM Integration
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
        title="Let's Connect"
        subtitle="Whether you need electronics, furniture, PVC interiors or home improvement services, our team is ready to help."
      />

      <div className="mx-auto max-w-7xl">

        {/* Contact Info + Form */}

        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">

          {/* =======================
              Contact Information
          ======================== */}

          <Card>

            <h3 className="mb-6 text-2xl font-bold text-[#0D1B4A]">
              Contact Information
            </h3>

            <div className="space-y-8">

              {/* Phone */}

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">

                  <Phone
                    size={22}
                    className="text-[#0D1B4A]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="mt-1 text-slate-700">
                    {COMPANY.phone}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Available during business hours.
                  </p>

                </div>

              </div>

              {/* WhatsApp */}

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50">

                  <MessageCircle
                    size={22}
                    className="text-green-600"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">
                    WhatsApp
                  </h4>

                  <p className="mt-1 text-slate-700">
                    +91 {COMPANY.whatsapp}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Fastest way to reach us.
                  </p>

                </div>

              </div>

              {/* Email */}

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">

                  <Mail
                    size={22}
                    className="text-[#F97316]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="mt-1 break-all text-slate-700">
                    {COMPANY.email}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Usually replies within 24 hours.
                  </p>

                </div>

              </div>

              {/* Address */}

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50">

                  <MapPin
                    size={22}
                    className="text-red-500"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">
                    Address
                  </h4>

                  <p className="mt-1 text-slate-700">
                    {COMPANY.address.line1}
                    <br />
                    {COMPANY.address.line2}
                    <br />
                    {COMPANY.address.city},{" "}
                    {COMPANY.address.state}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Visit us during business hours.
                  </p>

                </div>

              </div>

              {/* Business Hours */}

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-50">

                  <Clock
                    size={22}
                    className="text-yellow-600"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">
                    Business Hours
                  </h4>

                  <p className="mt-1 text-slate-700">
                    {COMPANY.timings}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Closed on Sundays.
                  </p>

                </div>

              </div>

            </div>

          </Card>

          {/* =======================
              Contact Form
          ======================== */}

          <Card>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-[#0D1B4A]"
                  required
                />

              </div>

              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-[#0D1B4A]"
                  required
                />

              </div>

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-[#0D1B4A]"
                  required
                />

              </div>

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-[#0D1B4A]"
                />

              </div>

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-slate-300 p-3 outline-none transition focus:border-[#0D1B4A]"
                  required
                />

              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-2 w-full"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </Button>

            </form>

          </Card>

        </div>

        {/* =======================
            Google Map
        ======================== */}

        <Card className="mt-10 overflow-hidden p-0">

          <iframe
            title="SHALL SOLUTIONS Location"
            src={COMPANY.mapEmbedUrl}
            className="h-[320px] md:h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

        </Card>

      </div>

    </Section>
  );
}