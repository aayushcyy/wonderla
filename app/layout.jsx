import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-mulish", // Optional: For Tailwind usage
});

export const metadata = {
  title:
    "Wonderla Parks and Resort | Largest Amusement Park in India | Wonderla",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased`}>{children}</body>
    </html>
  );
}
