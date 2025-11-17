import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreaTime - интернет магазин спортиных товаров",
  description: "Купить спортивные товары оптом и в розницу по низкой цене, доставка по РФ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
      >
        {children}
      </body>
    </html>
  );
}
