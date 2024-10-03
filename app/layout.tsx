import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fintech",
  description: "The next gen payment method.",
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    title: "Fintech",
    description: "The next gen payment method.",
    images: "/twitter-image.png",
    creator: "@codewithmide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="inter"
      >
        {children}
      </body>
    </html>
  );
}
