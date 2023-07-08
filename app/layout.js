import "./globals.css";
import { Sora } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "block",
});

export const metadata = {
  title: "Epargnez & investissez judicieusement votre argent - Wekavit",
  description:
    "Wekavit est une plateforme d'épargne en ligne très sécurisée qui permet d'épargner en alliant discipline et flexibilité pour vous faire fructifier votre épargne.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-full h-auto bg-hero-color">{children}</main>
      </body>
    </html>
  );
}
