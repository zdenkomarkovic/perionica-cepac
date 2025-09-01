import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "RRcustomsserbia - Profesionalna Auto-hemija | Šamponi, Voskovi, Detailing",
  description:
    "Profesionalna auto-hemija u Zrenjaninu. Auto šamponi za pranje, voskovi za zaštitu, sredstva za poliranje i detailing proizvodi. Perionica Čepac - kvalitet i tradicija.",
  icons: {
    icon: "/android-chrome-192x192.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
