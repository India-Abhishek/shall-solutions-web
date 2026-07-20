"use client";

import { useLanguage } from "@/components/common/language-provider";
import { COMPANY } from "@/config/company";
import { NAVIGATION } from "@/config/navigation";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="mt-20 bg-[#0D1B4A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Company */}

          <div>

            <h3 className="text-2xl font-bold">
              {COMPANY.name}
            </h3>

            <p className="mt-3 text-slate-300">
              {language === "hi"
                ? "बेहतर जीवन के लिए स्मार्ट समाधान"
                : COMPANY.tagline}
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="mb-4 text-lg font-semibold">
              {language === "hi"
                ? "त्वरित लिंक"
                : "Quick Links"}
            </h4>

            <ul className="space-y-2">

              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 transition hover:text-orange-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-4 text-lg font-semibold">
              {language === "hi"
                ? "संपर्क करें"
                : "Contact"}
            </h4>

            <div className="space-y-2 text-slate-300">

              <p>{COMPANY.phone}</p>

              <p>{COMPANY.email}</p>

              <p>
                {COMPANY.address.city},{" "}
                {COMPANY.address.state}
              </p>

            </div>

          </div>

        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">

          © {COMPANY.copyright.startYear}
          {new Date().getFullYear() !== COMPANY.copyright.startYear &&
            ` - ${new Date().getFullYear()}`}

          {" "}

          {COMPANY.name}.{" "}

          {COMPANY.footer.copyrightText}

        </div>

      </div>
    </footer>
  );
}