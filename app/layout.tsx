import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Layout/Header";

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
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
