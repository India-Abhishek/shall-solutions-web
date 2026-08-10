import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/common/language-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// export const metadata: Metadata = {
//   title: "SHALL SOLUTIONS",
//   description:
//     "Electronics, Electrical, PVC Interiors, Furniture and Home Solutions in Bettiah, Bihar.",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://shallsolutions.in"),

  title: {
    default: "SHALL SOLUTIONS",
    template: "%s | SHALL SOLUTIONS",
  },

  description:
    "SHALL SOLUTIONS offers Electronics, Electrical, PVC Interiors, Furniture and Home Improvement services in Bettiah, Bihar.",

  keywords: [
    "Electronics",
    "Furniture",
    "PVC Interior",
    "Electrical",
    "Bettiah",
    "West Champaran",
    "Bihar",
    "Home Improvement",
  ],

  authors: [
    {
      name: "SHALL SOLUTIONS",
    },
  ],

  creator: "SHALL SOLUTIONS",

  publisher: "SHALL SOLUTIONS",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SHALL SOLUTIONS",

    description:
      "Trusted Home Improvement Solutions.",

    url: "https://shallsolutions.in",

    siteName: "SHALL SOLUTIONS",

    locale: "en_IN",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
