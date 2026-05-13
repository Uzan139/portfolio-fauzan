import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fauzan | Portfolio",
  description:
    "Portfolio Fauzan - Mahasiswa Rekayasa Perangkat Lunak di Universitas Pendidikan Indonesia (UPI)",
  authors: [{ name: "Fauzan" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
