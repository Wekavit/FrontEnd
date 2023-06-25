import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Épargnez & investissez judicieusement votre argent - Wekavit",
  description:
    "Wekavit est une plateforme d'épargne en ligne très sécurisée qui permet d'épargner en alliant discipline et flexibilité pour vous faire fructifier votre épargne.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
