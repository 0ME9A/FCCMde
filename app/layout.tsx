import { Inter } from "next/font/google";
import type { Metadata } from "next";

import ChildLayout from "./ChildLayout";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FCC Mde",
  description: `Discover FCC Mde, where Markdown becomes a breeze. Experience real-time previews, easy formatting, and seamless export options. Unleash your creativity without the hassle. Join the future of Markdown editing with FCC Mde.`,
  authors: [{ name: "baliram singh", url: "https://ome9a.com" }],
  applicationName: "FCC Mde",
  keywords: [
    "Markdown editor",
    "FCC Mde",
    "Text formatting",
    "Markdown syntax",
    "Real-time preview",
    "Editing tool",
    "Content creation",
    "Markdown previewer",
    "Document editor",
    "Formatting options",
    "Collaboration",
    "Export to Markdown",
    "HTML export",
    "Responsive design",
    "User-friendly",
    "WYSIWYG",
    "Customization",
    "Content management",
    "Markdown rendering",
    "Code blocks",
    "Rich text editing",
    "Minimalist interface",
    "Cross-device editing",
    "Modern UI",
    "Edit and preview",
    "Collaboration features",
    "Edit on the go",
    "Writing tool",
    "Interactive editing",
    "Document sharing",
  ],
  creator: "OMEGA",
  publisher: "OMEGA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ChildLayout>{children}</ChildLayout>
      </body>
    </html>
  );
}
