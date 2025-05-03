import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Estudio de Arquitectura",
  description: "Diseño que trasciende el tiempo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={playfair.variable}>
      <body className="font-serif bg-white text-black">{children}</body>
    </html>
  );
}
