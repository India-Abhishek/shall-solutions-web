/*
|--------------------------------------------------------------------------
| Footer
|--------------------------------------------------------------------------
| Purpose:
| Public footer displayed on every page.
|
| Future:
| - Social Links
| - Privacy Policy
| - Terms
|--------------------------------------------------------------------------
*/

import { COMPANY } from "@/config/company";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0D1B4A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h3 className="text-2xl font-bold">
          {COMPANY.name}
        </h3>

        <p className="mt-2 text-slate-300">
          {COMPANY.tagline}
        </p>

        <div className="mt-8 border-t border-white/20 pt-6 text-sm text-slate-300">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}