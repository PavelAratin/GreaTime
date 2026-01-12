import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Layout/Header";
import LocalFont from "next/font/local";

// const GTEestiProDisplayFont = LocalFont({
//   src: "./../assets/fonts/GTEestiProDisplay/woff2/gteestiprodisplay_regular.woff2",
//   weight: "400",
// })

const GTEestiProDisplayFont = LocalFont({
  src: "./../assets/fonts/GTEestiProDisplay/woff2/gteestiprodisplay_regular.woff2",
  weight: "400",
})

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
      <body className={`${GTEestiProDisplayFont.className}`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
