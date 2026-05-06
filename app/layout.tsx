import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackMatch | Find Your Perfect Hackathon Team",
  description: "Hyper-digital platform for elite collaborative engineering and hackathon matching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
