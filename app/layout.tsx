import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Durga Prasad — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, Node.js, TypeScript, and scalable backend systems. Building production-ready applications with modern tech stacks.",
  keywords: ["Full Stack Developer", "Next.js", "Node.js", "TypeScript", "React", "Durga Prasad"],
  authors: [{ name: "Durga Prasad", url: "https://github.com/Durga1534" }],
  openGraph: {
    title: "Durga Prasad — Full Stack Developer",
    description: "Full Stack Developer building scalable, production-ready applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
