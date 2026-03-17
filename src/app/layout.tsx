import type { Metadata } from "next";
import { STIX_Two_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const stixTwoText = STIX_Two_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Derek McEwen | Software Engineer",
  description: "Personal site for Derek McEwen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stixTwoText.className}>
      <body className="bg-[#1a1a1a] text-zinc-200 antialiased">
        <Analytics />
        <div className="max-w-[78ch] mx-auto p-8 pt-0 md:pt-8 min-h-screen flex flex-col justify-between">
          <main>{children}</main>
          <footer className="py-8">
            <ul className="flex justify-center gap-6 text-sm text-zinc-400">
              <li>
                <a
                  href="https://github.com/derekmcq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline transition-colors hover:text-zinc-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dereklmcewen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline transition-colors hover:text-zinc-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline transition-colors hover:text-zinc-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </html>
  );
}
