import "./globals.css";
import { Sora } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"],
weight : "400" });

export const metadata = {
  title: "Wekavit",
  description: "Best Way To Save Your Money",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
      {/* <body className={sora.className}>{children}</body> */}
    </html>
  );
}
