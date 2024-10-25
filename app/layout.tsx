import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Archivo} from 'next/font/google'

const archivo = Archivo({
  weight: ['400','500','600','700','900'],
  subsets: ['latin'],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Timetable Architect",
  description: "Generate optimal timetables for students and teachers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${archivo.className}`}
      >
        {children}
      </body>
    </html>
  );
}
